/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const base =
    BASE_PATH ||
    (typeof window !== "undefined" && window.location.pathname.startsWith("/portfolio")
      ? "/portfolio"
      : "");
  if (base && path.startsWith(base)) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

export const PERSON = {
  name: "Gowtham S",
  jobTitle: "Cybersecurity Researcher & Ethical Hacker",
  email: "sgowtham28122004@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://github.com/gowtham0x",
  ],
};
