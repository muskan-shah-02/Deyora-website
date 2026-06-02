"use client";
import { useEffect, useRef, useState } from "react";
import type { Metric } from "@/lib/products";

export default function MetricCounter({ metrics }: { metrics: Metric[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.2 },
    );
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="grid grid-cols-2 md:grid-cols-4">
      {metrics.map((m, i) => (
        <MetricItem key={i} metric={m} started={started} hasRightBorder={i < metrics.length - 1} />
      ))}
    </div>
  );
}

function MetricItem({ metric, started, hasRightBorder }: { metric: Metric; started: boolean; hasRightBorder: boolean }) {
  const [val, setVal] = useState(metric.start);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(metric.start + eased * (metric.target - metric.start));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, metric.start, metric.target]);

  return (
    <div
      className={`px-8 py-12 md:px-10 md:py-16 text-center border-subtle ${
        hasRightBorder ? "md:border-r" : ""
      } border-b md:border-b-0 last:border-b-0`}
    >
      <div className="display text-[56px] sm:text-[72px] md:text-[90px] leading-none text-white mb-3">
        {val.toFixed(metric.decimals ?? 0)}
        {metric.suffix ?? ""}
      </div>
      <div className="label-mono">{metric.label}</div>
    </div>
  );
}
