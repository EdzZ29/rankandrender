export type MockTheme = {
  brand: string;
  headline: string;
  sub: string;
  cta: string;
  from: string;
  to: string;
  accent: string;
  pattern: "road" | "blueprint" | "waves";
};

export type Project = {
  slug: string;
  title: string;
  industry: string;
  category: string;
  summary: string;
  tags: string[];
  theme: MockTheme;
  challenge: string;
  approach: string[];
  built: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "driving-school",
    title: "Driving School",
    industry: "Education",
    category: "Website / Digital Experience",
    summary:
      "A modern website and digital experience for a driving school. Clear lesson pathways, a simple booking flow and a mobile-first journey built around how learners actually search and enrol.",
    tags: ["Website Design", "Development"],
    theme: {
      brand: "SteerClear",
      headline: "Pass with confidence.",
      sub: "Lessons, packages and test prep, booked in minutes.",
      cta: "Book a lesson",
      from: "#0c2340",
      to: "#1e4fa8",
      accent: "#facc15",
      pattern: "road",
    },
    challenge:
      "Learners and parents compare driving schools on their phones, often late at night. The old site buried lesson prices and made booking a phone-call-only process, so enquiries quietly leaked to competitors with simpler journeys.",
    approach: [
      "Mapped the questions learners ask before booking: price, availability, instructor and test preparation.",
      "Designed package pages that compare options at a glance, with the most popular choice highlighted.",
      "Built a three-step booking request that works comfortably with one thumb.",
      "Set up local SEO foundations so the school appears for suburb-level searches.",
    ],
    built: [
      "Mobile-first website",
      "Lesson package comparison",
      "Booking request flow",
      "Instructor profiles",
      "Local SEO foundations",
      "Enquiry tracking",
    ],
    outcome:
      "A site that answers the big questions upfront and turns late-night browsing into booking requests, without the back-and-forth of phone tag.",
  },
  {
    slug: "building-company",
    title: "Building Company",
    industry: "Construction",
    category: "Website / Digital Presence",
    summary:
      "A complete digital presence for a building company. Project showcases, service pages and an enquiry experience designed to match the standard of their work on site.",
    tags: ["Website Design", "Development"],
    theme: {
      brand: "Northline Build",
      headline: "Built properly. Built to last.",
      sub: "Custom homes, renovations and extensions.",
      cta: "Request a quote",
      from: "#1c1917",
      to: "#3a332d",
      accent: "#f59e0b",
      pattern: "blueprint",
    },
    challenge:
      "Their craftsmanship was excellent, but their online presence said otherwise. Past projects lived in a disorganised gallery and quote requests arrived with almost no detail, wasting time on both sides.",
    approach: [
      "Turned past builds into structured case studies with scope, timeline and finish details.",
      "Wrote service pages for each type of work so the right clients self-select.",
      "Designed a guided quote form that captures budget, location and timeframe before the first call.",
      "Optimised the Google Business Profile with fresh project photos and service areas.",
    ],
    built: [
      "Project case study system",
      "Service and location pages",
      "Guided quote request form",
      "Google Business optimisation",
      "Before and after galleries",
      "Fast image delivery",
    ],
    outcome:
      "A presence that finally reflects the quality of the work, with better-qualified enquiries arriving ready for a real conversation.",
  },
  {
    slug: "boat-charter",
    title: "Boat Charter Business",
    industry: "Hospitality & Tourism",
    category: "Website / Conversion Experience",
    summary:
      "A conversion-focused website for a boat charter business. Immersive visuals, clear package pathways and calls-to-action built to turn browsers into bookings.",
    tags: ["Website Design", "Conversion Optimisation"],
    theme: {
      brand: "Bluewater Charters",
      headline: "Your day on the water starts here.",
      sub: "Private charters, reef tours and sunset cruises.",
      cta: "Check availability",
      from: "#053b4f",
      to: "#0a8aa8",
      accent: "#ff8a5c",
      pattern: "waves",
    },
    challenge:
      "Visitors loved the photos but struggled to choose between trips, and most bookings went through third-party platforms that took a significant cut of every sale.",
    approach: [
      "Grouped trips into clear packages by occasion: private groups, reef adventures and sunset cruises.",
      "Placed availability and pricing next to every package so there’s no hunting.",
      "Added persistent booking calls-to-action on mobile without cluttering the visuals.",
      "Built trust with reviews, safety information and a clear what-to-bring guide.",
    ],
    built: [
      "Immersive visual website",
      "Package comparison pages",
      "Direct booking pathways",
      "Mobile sticky calls-to-action",
      "Reviews and trust sections",
      "Conversion tracking",
    ],
    outcome:
      "A website that sells the experience and makes booking direct the easiest option, reducing reliance on third-party platforms.",
  },
];
