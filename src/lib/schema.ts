// Shared schema.org helpers for Course structured data on program pages.
// The Organization/LocalBusiness node lives in Layout.astro and owns the
// canonical @id below; Courses reference it as their provider.

const ORG_ID = "https://www.kit-learning.com/#org";

const PROVIDER = {
  "@type": "EducationalOrganization",
  "@id": ORG_ID,
  name: "KIT Learning",
} as const;

const KIT_PLACE = {
  "@type": "Place",
  name: "KIT Learning",
  address: {
    "@type": "PostalAddress",
    streetAddress: "91 Bencoolen St, #08-05 (Office Tower), Sunshine Plaza",
    addressLocality: "Singapore",
    postalCode: "189652",
    addressCountry: "SG",
  },
} as const;

export interface CourseInput {
  name: string;
  description: string;
  lang: "ru" | "en";
  /** schema.org courseMode — "Onsite" (default), "Online", or "Blended". */
  courseMode?: "Onsite" | "Online" | "Blended";
  /** e.g. "2-14" (years). */
  typicalAgeRange?: string;
  educationalLevel?: string;
  /** Absolute or root-relative URL of the page describing the course. */
  url?: string;
}

/**
 * Build a schema.org Course node. Includes a hasCourseInstance (with delivery
 * mode + physical location) so the node is complete for search engines without
 * inventing prices or fixed schedules. Group vs 1-on-1 is conveyed in the
 * description text, as schema.org has no dedicated field for it.
 */
export function course(c: CourseInput): Record<string, unknown> {
  const mode = c.courseMode ?? "Onsite";
  return {
    "@type": "Course",
    name: c.name,
    description: c.description,
    provider: PROVIDER,
    inLanguage: c.lang,
    ...(c.url ? { url: c.url } : {}),
    ...(c.typicalAgeRange ? { typicalAgeRange: c.typicalAgeRange } : {}),
    ...(c.educationalLevel ? { educationalLevel: c.educationalLevel } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: mode,
      ...(c.url ? { url: c.url } : {}),
      ...(mode === "Online" ? {} : { location: KIT_PLACE }),
    },
  };
}
