export type MockTheme = {
  brand: string;
  headline: string;
  sub: string;
  cta: string;
  from: string;
  to: string;
  accent: string;
  pattern: "road" | "blueprint" | "waves" | "fan";
};

export type Project = {
  slug: string;
  title: string;
  industry: string;
  category: string;
  summary: string;
  /** Live site, for real client work. */
  url?: string;
  /** Screenshot of the live site in /public, shown in place of the illustrated mockup. */
  image?: string;
  tags: string[];
  theme: MockTheme;
  challenge: string;
  approach: string[];
  built: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "fan-cleaners",
    title: "Fan Cleaners",
    industry: "Service Businesses",
    category: "Website / Lead Generation",
    summary:
      "A fast, conversion-focused website for a Darwin ceiling fan cleaning business. Fixed pricing up front, a 30-second price check and clear booking pathways that turn local searches into booked jobs.",
    url: "https://fancleaners.com",
    image: "/work/fan-cleaners.png",
    tags: ["Website Design", "Development", "Local SEO"],
    theme: {
      brand: "Fan Cleaners",
      headline: "Filthy ceiling fans? We clean them.",
      sub: "Up to 5 fans cleaned from $189 fixed. Done in under an hour.",
      cta: "Book my fan clean",
      from: "#1f4d08",
      to: "#3f9a0e",
      accent: "#bef264",
      pattern: "fan",
    },
    challenge:
      "Fan cleaning is a job people put off, then want sorted fast. Homeowners needed to know what it costs, whether the business covers their suburb and how easy it is to book, before they’d pick up the phone.",
    approach: [
      "Led with the price: a fixed $189 for up to five fans, with clear tiers for larger homes and extra exhaust fans.",
      "Built a 30-second price check so visitors can see their price without waiting for a quote.",
      "Packaged a twice-yearly plan that rewards repeat customers and smooths out bookings.",
      "Created service and service-area pages for Darwin, Palmerston, Litchfield and the rural region.",
      "Put trust front and centre: fully insured, a re-clean guarantee and real before-and-after photos.",
    ],
    built: [
      "Mobile-first website",
      "30-second price checker",
      "Quote and booking forms",
      "Twice-yearly plan page",
      "Service and area pages",
      "Before and after showcase",
    ],
    outcome:
      "A site that answers price, coverage and trust in the first scroll, so locals can go from searching to booking a fan clean in a couple of taps.",
  },
  {
    slug: "tower-sealants",
    title: "Tower Sealants",
    industry: "Manufacturing",
    category: "Website / Product Catalogue",
    summary:
      "A bold, product-led website for a caulk and sealant manufacturer serving professional painters and contractors. A clear product catalogue, a dealer locator and online buying, all in one place.",
    url: "https://www.towersealants.com",
    image: "/work/tower-sealants.png",
    tags: ["Website Design", "Development", "E-Commerce"],
    theme: {
      brand: "Tower Sealants",
      headline: "Latest innovations in caulks and sealants.",
      sub: "Unmatched service and quality since 2006.",
      cta: "Shop products",
      from: "#111111",
      to: "#2b2b2b",
      accent: "#d7192d",
      pattern: "blueprint",
    },
    challenge:
      "Tower Sealants sells to busy professionals who need the right product, its technical data and somewhere to buy it, fast. With a growing range, multiple offices and both dealer and direct sales, the site had to make every one of those paths obvious.",
    approach: [
      "Organised the range into a product catalogue with solutions grouped by job, so painters find the right sealant quickly.",
      "Put “Local Dealer” and “Buy Online” in the header on every page, so there’s always a next step.",
      "Gathered technical, safety and architect data sheets into a resources hub contractors can rely on.",
      "Added practical tools, including a usage calculator and compatibility guide, plus a wholesale pathway for trade accounts.",
      "Kept the brand bold and industrial, with English and Spanish language options.",
    ],
    built: [
      "Product catalogue",
      "Dealer locator",
      "Online buying pathway",
      "Data sheet resource hub",
      "Usage calculator and compatibility guide",
      "Wholesale enquiries",
    ],
    outcome:
      "A site that works as hard as the products: professionals can research, compare and buy, or find a local dealer, in a few clicks.",
  },
  {
    slug: "localised-seo",
    title: "LocalisedSEO",
    industry: "Professional Services",
    category: "Website / Agency Lead Generation",
    summary:
      "A confident, editorial website for a digital marketing agency in Oxnard, California. Clear services, industry pages and pricing, with “Book a call” always one click away.",
    url: "https://localisedseo.com",
    image: "/work/localised-seo.png",
    tags: ["Website Design", "Development", "Local SEO"],
    theme: {
      brand: "LocalisedSEO",
      headline: "Digital marketing built to help local businesses grow.",
      sub: "Weed out the competition and rank high.",
      cta: "Book a call",
      from: "#2e1a6b",
      to: "#6a3fe0",
      accent: "#c4b5fd",
      pattern: "waves",
    },
    challenge:
      "Local business owners are wary of marketing agencies. LocalisedSEO needed a site that felt personal and trustworthy, showed exactly what they do and who they work with, and turned that trust into booked calls.",
    approach: [
      "Built a distinctive editorial look with a strong headline and a clear, local positioning for Oxnard, Ventura County and Southern California.",
      "Gave each service its own page, from SEO and web design to PPC, social media and reputation management.",
      "Created “Who We Work With” pages for 18+ industries, so visitors see their own business reflected.",
      "Added transparent pricing and a results section with websites built and testimonials.",
      "Kept “Book a call” and a free audit offer prominent on every page, alongside account and checkout pages for purchasing services online.",
    ],
    built: [
      "Editorial website design",
      "Service pages",
      "Industry landing pages",
      "Pricing and checkout",
      "Results and testimonials",
      "Book-a-call pathways",
    ],
    outcome:
      "A site that explains the agency in seconds, speaks directly to each type of local business and gives every visitor a clear next step: book a call.",
  },
];
