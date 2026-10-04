export const site = {
  name: "Rank & Render",
  url: "https://www.rankandrender.com",
  tagline: "Digital growth systems for businesses ready to build, improve and grow online.",
  email: "contact@rankandrender.com",
  phone: "+61 2 8000 0000",
  phoneHref: "tel:+61280000000",
  location: "Working with businesses worldwide",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/work", label: "Our Work" },
  { href: "/why-us", label: "Why Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
