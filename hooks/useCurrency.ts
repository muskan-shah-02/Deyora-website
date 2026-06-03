"use client";

import { useEffect, useState } from "react";
import { detectRegion, DEFAULT_REGION, type CurrencyInfo } from "@/lib/currency";

const STORAGE_KEY = "deyora.region";
const EVENT_NAME = "deyora:region-change";

/**
 * Returns the visitor's currency region. Detects from browser locale on
 * mount; persists user override in localStorage; listens for the
 * `deyora:region-change` CustomEvent so any UI on the page can change
 * the region and every consumer updates in sync.
 *
 * SSR-safe: renders with DEFAULT_REGION (USD) and swaps on mount.
 */
export function useCurrency(): {
  region: CurrencyInfo;
  ready: boolean;
  setRegion: (r: CurrencyInfo) => void;
} {
  const [region, setRegionState] = useState<CurrencyInfo>(DEFAULT_REGION);
  const [ready, setReady] = useState(false);

  // Initial detection + restore override
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CurrencyInfo;
        if (parsed?.code && parsed?.locale && parsed?.symbol) {
          setRegionState(parsed);
          setReady(true);
          return;
        }
      }
    } catch {
      // ignore — fall through to auto-detect
    }
    setRegionState(detectRegion());
    setReady(true);
  }, []);

  // Listen for region-change events from anywhere on the page
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<CurrencyInfo>).detail;
      if (detail?.code) {
        setRegionState(detail);
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(detail));
        } catch {
          // localStorage disabled — fine, just won't persist
        }
      }
    };
    window.addEventListener(EVENT_NAME, handler as EventListener);
    return () => window.removeEventListener(EVENT_NAME, handler as EventListener);
  }, []);

  const setRegion = (r: CurrencyInfo) => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: r }));
  };

  return { region, ready, setRegion };
}
