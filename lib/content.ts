import {
  Bot,
  Briefcase,
  Building2,
  ChartLine,
  Compass,
  Cpu,
  EyeOff,
  Globe,
  GraduationCap,
  Hammer,
  HeartPulse,
  House,
  Landmark,
  LayoutTemplate,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  PhoneMissed,
  Repeat,
  Rocket,
  Search,
  SearchX,
  ShoppingBag,
  Smartphone,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  short: string;
  title: string;
  quote: string;
  description: string;
  tags: string[];
  cta: string;
  icon: LucideIcon;
  deliverables: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    id: "websites",
    short: "Websites",
    title: "Website Design & Development",
    quote: "Make the first impression do the selling.",
    description:
      "High-performance websites designed to communicate your value, build trust and turn visitors into customers.",
    tags: [
      "Custom UI/UX",
      "Responsive development",
      "Conversion optimisation",
      "Mobile-first design",
      "Performance optimisation",
      "SEO-ready architecture",
      "Landing pages",
      "Integrations",
    ],
    cta: "Build my website",
    icon: LayoutTemplate,
    deliverables: [
      "Strategy session and sitemap",
      "Custom design in your brand",
      "Fast, mobile-first build",
      "Copy guidance and page structure",
      "Analytics and enquiry tracking",
      "Launch, training and handover",
    ],
    idealFor:
      "Businesses whose website no longer matches the quality of their work, or who are launching something new.",
  },
  {
    id: "apps",
    short: "Mobile Apps",
    title: "Mobile App Development",
    quote: "Put your business in your customer’s pocket.",
    description:
      "Custom digital experiences that help businesses serve customers, streamline operations and create new opportunities.",
    tags: [
      "Customer apps",
      "Business apps",
      "Booking systems",
      "Customer portals",
      "Notifications",
      "Custom functionality",
      "API integrations",
    ],
    cta: "Discuss my app",
    icon: Smartphone,
    deliverables: [
      "Discovery and feature scoping",
      "UX flows and clickable prototype",
      "iOS and Android build",
      "Accounts, backend and integrations",
      "App store submission",
      "Ongoing support and updates",
    ],
    idealFor:
      "Businesses with repeat customers, bookings or internal processes that a web page alone can’t handle.",
  },
  {
    id: "automation",
    short: "AI Automation",
    title: "AI Automation",
    quote: "Stop doing manually what technology can do for you.",
    description:
      "Practical automation that follows up leads, handles repetitive tasks and keeps customers engaged, while your team focuses on the work that matters.",
    tags: [
      "Lead follow-up",
      "Missed-call automation",
      "Booking reminders",
      "Review requests",
      "AI chatbots",
      "CRM workflows",
      "Lead qualification",
      "Customer reactivation",
      "Internal workflows",
    ],
    cta: "Automate my business",
    icon: Bot,
    deliverables: [
      "Process review to find time leaks",
      "Instant lead and missed-call follow-up",
      "Booking and reminder flows",
      "AI assistant trained on your business",
      "CRM setup and pipeline stages",
      "Monitoring and monthly tuning",
    ],
    idealFor:
      "Teams losing hours to admin, or losing leads because nobody replied fast enough.",
  },
  {
    id: "seo",
    short: "SEO",
    title: "SEO",
    quote: "Be found by people already looking for what you sell.",
    description:
      "Search visibility built on solid technical foundations, useful content and a structure Google can actually understand.",
    tags: [
      "Technical SEO",
      "On-page SEO",
      "Local SEO",
      "Keyword research",
      "Content strategy",
      "Google Business optimisation",
      "Landing pages",
      "Internal linking",
      "SEO reporting",
    ],
    cta: "Improve my visibility",
    icon: Search,
    deliverables: [
      "Technical audit and fixes",
      "Keyword and competitor research",
      "Service and location pages",
      "Google Business Profile optimisation",
      "Content plan and publishing",
      "Monthly plain-English reporting",
    ],
    idealFor:
      "Businesses that are great at what they do but hard to find when customers search.",
  },
  {
    id: "social",
    short: "Social Media",
    title: "Social Media Management",
    quote: "Show up consistently, with a reason to.",
    description:
      "Build a consistent digital presence that keeps your brand visible, credible and relevant.",
    tags: [
      "Content strategy",
      "Content creation",
      "Posting",
      "Brand consistency",
      "Engagement",
      "Performance tracking",
      "Platform management",
    ],
    cta: "Improve my social presence",
    icon: Megaphone,
    deliverables: [
      "Platform and audience strategy",
      "Monthly content calendar",
      "Design, copy and scheduling",
      "Community engagement",
      "Brand templates and guidelines",
      "Performance reviews and adjustments",
    ],
    idealFor:
      "Businesses posting without a plan, or not posting at all because there’s never time.",
  },
];

export const serviceOptions = [
  "Not sure yet",
  ...services.map((s) => s.title),
  "Full digital growth system",
];

/* ------------------------------------------------------------------ */
/* Problems                                                            */
/* ------------------------------------------------------------------ */

export const problems: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Outdated website", text: "Your website doesn’t reflect the quality of your business.", icon: Globe },
  { title: "Invisible online", text: "Potential customers can’t find you when they’re searching.", icon: SearchX },
  { title: "Low conversion", text: "People visit your website but don’t know what to do next.", icon: MousePointerClick },
  { title: "Missed leads", text: "Enquiries arrive but aren’t followed up quickly enough.", icon: PhoneMissed },
  { title: "Manual processes", text: "Your team spends time on tasks that technology could automate.", icon: Repeat },
  { title: "Weak digital presence", text: "Your competitors look more credible online.", icon: EyeOff },
];

/* ------------------------------------------------------------------ */
/* The system                                                          */
/* ------------------------------------------------------------------ */

export const stages = [
  {
    title: "Get Found",
    text: "Show up where customers are already searching, with a site and content that search engines understand.",
    items: ["SEO", "Search visibility", "Content", "Digital presence"],
    link: "/services#seo",
  },
  {
    title: "Get Trusted",
    text: "Make the first impression match the quality of your work, so visitors believe you before they ever call.",
    items: ["Website", "Brand experience", "Content", "Social presence"],
    link: "/services#websites",
  },
  {
    title: "Get Customers",
    text: "Turn attention into enquiries with clear pathways, strong offers and pages designed to convert.",
    items: ["Conversion-focused design", "Landing pages", "Calls-to-action", "Lead generation"],
    link: "/services#websites",
  },
  {
    title: "Automate",
    text: "Respond instantly, follow up every lead and take repetitive work off your team’s plate.",
    items: ["AI", "CRM", "Lead follow-up", "Booking workflows", "Customer communication"],
    link: "/services#automation",
  },
  {
    title: "Grow",
    text: "Measure what’s working, improve what isn’t and expand into apps, campaigns and new channels.",
    items: ["Analytics", "Optimisation", "Marketing", "New digital experiences"],
    link: "/services#apps",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export const industries: { name: string; text: string; icon: LucideIcon }[] = [
  { name: "Service Businesses", text: "More booked jobs from people already searching for your service in your area.", icon: Wrench },
  { name: "E-Commerce", text: "Faster stores, clearer product pages and automated follow-ups that recover lost sales.", icon: ShoppingBag },
  { name: "Professional Services", text: "A credible presence that builds trust before the first consultation.", icon: Briefcase },
  { name: "Startups", text: "Launch-ready websites and apps that look established from day one.", icon: Rocket },
  { name: "Trades & Construction", text: "Project showcases and quote forms that win better jobs, not just more calls.", icon: Hammer },
  { name: "Education", text: "Clear course pathways and simple enrolment that work beautifully on mobile.", icon: GraduationCap },
  { name: "Real Estate", text: "Listings, appraisal funnels and follow-ups that keep you top of mind.", icon: House },
  { name: "Hospitality", text: "Immersive visuals and direct booking flows that reduce reliance on third parties.", icon: UtensilsCrossed },
  { name: "Technology", text: "Product sites and onboarding that make complex products easy to understand and buy.", icon: Cpu },
  { name: "Finance", text: "Trustworthy, compliant experiences that turn careful researchers into clients.", icon: Landmark },
  { name: "Coaches & Consultants", text: "Authority-building content and booking funnels that fill your calendar.", icon: Compass },
  { name: "Health & Wellness", text: "Online booking, reminders and reviews that keep appointments full.", icon: HeartPulse },
];

/* ------------------------------------------------------------------ */
/* Why us                                                              */
/* ------------------------------------------------------------------ */

export const reasons = [
  {
    title: "Strategy + Execution",
    text: "We don’t just tell you what needs to change. We build it.",
    icon: Lightbulb,
  },
  {
    title: "One Team",
    text: "Design, development, SEO, automation and digital marketing working together instead of being scattered across multiple providers.",
    icon: Building2,
  },
  {
    title: "Technology With A Purpose",
    text: "We use modern technology where it creates a genuine business advantage, not simply because it’s new.",
    icon: Cpu,
  },
  {
    title: "Built Around Your Business",
    text: "No copy-and-paste strategy. We start with your goals, customers and market, then build what fits.",
    icon: ChartLine,
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps = [
  { title: "Audit", text: "We identify what’s working, what’s not and where opportunities are being missed." },
  { title: "Strategy", text: "We decide what your business actually needs, without unnecessary services." },
  { title: "Build", text: "Our team designs and develops the solution, with you involved at every milestone." },
  { title: "Grow", text: "We optimise, automate and improve as your business evolves." },
];

/* ------------------------------------------------------------------ */
/* Comparison + before/after                                           */
/* ------------------------------------------------------------------ */

export const bigAgency = [
  "Multiple layers",
  "Slow communication",
  "Generic strategies",
  "Unnecessary meetings",
  "Agency overhead",
];

export const ourWay = [
  "Hands-on team",
  "Direct communication",
  "Business-specific strategy",
  "Lean execution",
  "Modern technology",
];

export const beforeList = [
  "Outdated website",
  "Weak messaging",
  "Poor mobile experience",
  "No clear call-to-action",
  "Difficult navigation",
  "Manual lead handling",
];

export const afterList = [
  "Modern website",
  "Clear value proposition",
  "Mobile-first experience",
  "Strong calls-to-action",
  "Better customer journey",
  "Automated workflows",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: "Do you only work with certain industries?",
    a: "No. We work with service businesses, online stores, professional firms, startups and more. The fundamentals of getting found, earning trust and converting enquiries apply everywhere. What changes is the strategy, and we tailor that to your market.",
  },
  {
    q: "Do I need all five services?",
    a: "Not at all. Many clients start with one, usually a website or SEO, and add more as they grow. The free audit shows what will make the biggest difference first, and we’ll tell you honestly if something isn’t worth doing yet.",
  },
  {
    q: "Do you only work with businesses in certain countries?",
    a: "We work with businesses worldwide. Everything we do can be delivered remotely, with calls scheduled around your time zone.",
  },
  {
    q: "Can you work with my existing website?",
    a: "Yes. If your current site has solid foundations, we can improve its design, speed, SEO and conversion. If it’s holding you back, we’ll explain why and recommend a rebuild. Either way, you get a straight answer.",
  },
  {
    q: "How does the free audit work?",
    a: "Share your website and a little about your business. We review your site, search visibility, conversion pathways and follow-up process, then send a clear summary of the gaps and opportunities with recommended next steps. There’s no obligation.",
  },
  {
    q: "How do we get started?",
    a: "Request your free audit or book a strategy call. We’ll talk through your goals, share what we found and recommend a scope. If it’s a good fit, we agree on a plan, timeline and investment before any work begins.",
  },
];

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,500",
    unit: "one-off project",
    blurb: "For businesses that need a strong digital foundation.",
    features: [
      "Professional website",
      "Mobile optimisation",
      "Basic SEO",
      "Conversion optimisation",
      "Lead/contact forms",
      "Launch support",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$4,900",
    unit: "project + setup",
    blurb: "For businesses ready to improve visibility and generate more opportunities.",
    features: [
      "Everything in Starter",
      "Advanced SEO",
      "Conversion optimisation",
      "AI automation",
      "Lead follow-up",
      "CRM integration",
      "Performance reporting",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    id: "full-service",
    name: "Full-Service",
    price: "Custom",
    unit: "ongoing partnership",
    blurb: "For businesses wanting an end-to-end digital growth system.",
    features: [
      "Everything in Growth",
      "Advanced automation",
      "Social media management",
      "Advanced SEO",
      "App development",
      "Dedicated growth strategy",
      "Monthly optimisation",
    ],
    cta: "Plan my system",
    featured: false,
  },
];

export const planMatrix: { feature: string; tiers: [boolean, boolean, boolean] }[] = [
  { feature: "Custom website design", tiers: [true, true, true] },
  { feature: "Mobile-first build", tiers: [true, true, true] },
  { feature: "Lead and contact forms", tiers: [true, true, true] },
  { feature: "Basic SEO setup", tiers: [true, true, true] },
  { feature: "Conversion optimisation", tiers: [true, true, true] },
  { feature: "Advanced SEO", tiers: [false, true, true] },
  { feature: "AI automation and lead follow-up", tiers: [false, true, true] },
  { feature: "CRM integration", tiers: [false, true, true] },
  { feature: "Performance reporting", tiers: [false, true, true] },
  { feature: "Social media management", tiers: [false, false, true] },
  { feature: "App development", tiers: [false, false, true] },
  { feature: "Monthly optimisation", tiers: [false, false, true] },
];

export const pricingFaqs = [
  {
    q: "Are these prices fixed?",
    a: "They’re transparent starting points. After your free audit, we send a fixed quote based on your actual scope, so there are no surprises later.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Yes. Many clients begin with Starter and move to Growth once the foundation is in place. Everything we build is designed to be extended.",
  },
  {
    q: "What if I only need one service?",
    a: "That’s fine. Each service can be scoped on its own. Tell us what you need in the audit request and we’ll quote just that.",
  },
];

/* ------------------------------------------------------------------ */
/* Values (about)                                                      */
/* ------------------------------------------------------------------ */

export const values = [
  { title: "Honest advice", text: "If something won’t move the needle for your business, we’ll say so, even when it means a smaller project." },
  { title: "Build what matters", text: "Every page, workflow and feature should earn its place by helping you get found, trusted or chosen." },
  { title: "Plain language", text: "No jargon, no smoke and mirrors. You’ll always understand what we’re doing and why." },
  { title: "Long-term thinking", text: "We build foundations that grow with you, not quick fixes you’ll need to replace next year." },
];
