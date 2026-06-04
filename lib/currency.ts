// Currency detection + formatting.
//
// Strategy:
//   - On the server: render with USD defaults (no `window` available).
//   - On the client: detect from navigator.language → region → currency.
//   - All formatting goes through Intl.NumberFormat with the matching
//     locale, so ₹ uses Indian lakh formatting and $ uses US formatting
//     etc. — fixes the "$3,24,000" bug.
//
// To add a region, drop an entry into REGIONS below.

export type CurrencyInfo = {
  code: string;             // ISO 4217
  symbol: string;
  locale: string;           // BCP-47, used by Intl.NumberFormat
  countryName: string;
  // Sensible per-region defaults for the ROI calculator
  defaultHourlyRate: number;
  hourlyRateMin: number;
  hourlyRateMax: number;
};

export const REGIONS: Record<string, CurrencyInfo> = {
  IN: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
    countryName: "India",
    defaultHourlyRate: 2000,
    hourlyRateMin: 500,
    hourlyRateMax: 6000,
  },
  US: {
    code: "USD",
    symbol: "$",
    locale: "en-US",
    countryName: "United States",
    defaultHourlyRate: 75,
    hourlyRateMin: 40,
    hourlyRateMax: 200,
  },
  GB: {
    code: "GBP",
    symbol: "£",
    locale: "en-GB",
    countryName: "United Kingdom",
    defaultHourlyRate: 60,
    hourlyRateMin: 35,
    hourlyRateMax: 180,
  },
  DE: {
    code: "EUR",
    symbol: "€",
    locale: "de-DE",
    countryName: "Germany",
    defaultHourlyRate: 70,
    hourlyRateMin: 35,
    hourlyRateMax: 180,
  },
  FR: {
    code: "EUR",
    symbol: "€",
    locale: "fr-FR",
    countryName: "France",
    defaultHourlyRate: 65,
    hourlyRateMin: 35,
    hourlyRateMax: 180,
  },
  AU: {
    code: "AUD",
    symbol: "A$",
    locale: "en-AU",
    countryName: "Australia",
    defaultHourlyRate: 90,
    hourlyRateMin: 50,
    hourlyRateMax: 220,
  },
  CA: {
    code: "CAD",
    symbol: "C$",
    locale: "en-CA",
    countryName: "Canada",
    defaultHourlyRate: 70,
    hourlyRateMin: 40,
    hourlyRateMax: 180,
  },
  SG: {
    code: "SGD",
    symbol: "S$",
    locale: "en-SG",
    countryName: "Singapore",
    defaultHourlyRate: 80,
    hourlyRateMin: 45,
    hourlyRateMax: 200,
  },
  AE: {
    code: "AED",
    symbol: "د.إ",
    locale: "en-AE",
    countryName: "UAE",
    defaultHourlyRate: 250,
    hourlyRateMin: 100,
    hourlyRateMax: 600,
  },
};

export const DEFAULT_REGION: CurrencyInfo = REGIONS.US;

/** Best-effort country code from a BCP-47 tag like "en-IN" → "IN". */
function regionFromLocale(locale: string | undefined): string | null {
  if (!locale) return null;
  const parts = locale.split("-");
  // "en-IN" → "IN"; "fr-CA" → "CA"; "en" → null
  const code = parts[parts.length - 1]?.toUpperCase();
  if (!code || code.length !== 2) return null;
  return code;
}

/** Best-effort country code from the user's timezone. Fallback signal. */
function regionFromTimezone(): string | null {
  if (typeof Intl === "undefined") return null;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    // Lightweight map of common timezones to countries — enough to catch the
    // big cases the browser locale misses (e.g. user on US laptop but in India).
    const map: Record<string, string> = {
      "Asia/Kolkata": "IN",
      "Asia/Calcutta": "IN",
      "Asia/Mumbai": "IN",
      "Asia/Dubai": "AE",
      "Asia/Singapore": "SG",
      "Europe/London": "GB",
      "Europe/Berlin": "DE",
      "Europe/Paris": "FR",
      "Australia/Sydney": "AU",
      "Australia/Melbourne": "AU",
      "America/Toronto": "CA",
      "America/Vancouver": "CA",
    };
    if (map[tz]) return map[tz];
    if (tz.startsWith("America/")) return "US";
    if (tz.startsWith("Europe/")) return "DE";
    return null;
  } catch {
    return null;
  }
}

/** Detect the user's region purely client-side. Safe to call in SSR. */
export function detectRegion(): CurrencyInfo {
  if (typeof window === "undefined") return DEFAULT_REGION;
  const fromLocale = regionFromLocale(navigator.language);
  if (fromLocale && REGIONS[fromLocale]) return REGIONS[fromLocale];
  const fromTz = regionFromTimezone();
  if (fromTz && REGIONS[fromTz]) return REGIONS[fromTz];
  return DEFAULT_REGION;
}

/** Format a number as currency for the given region. */
export function formatCurrency(amount: number, region: CurrencyInfo): string {
  try {
    return new Intl.NumberFormat(region.locale, {
      style: "currency",
      currency: region.code,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${region.symbol}${Math.round(amount).toLocaleString()}`;
  }
}

/** Format an integer count using the region's locale rules. */
export function formatNumber(amount: number, region: CurrencyInfo): string {
  try {
    return new Intl.NumberFormat(region.locale).format(amount);
  } catch {
    return Math.round(amount).toLocaleString();
  }
}
