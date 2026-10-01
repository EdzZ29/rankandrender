export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: Block[];
};

export const categories = [
  "Websites & Conversion",
  "SEO & Visibility",
  "AI Automation",
  "Mobile Apps",
  "Social Media",
] as const;

export const posts: Post[] = [
  {
    slug: "why-your-website-gets-visitors-but-no-enquiries",
    title: "Why Your Website Gets Visitors But No Enquiries",
    excerpt:
      "Traffic without enquiries is one of the most common, and most fixable, problems in digital. Here’s what’s usually going wrong.",
    category: "Websites & Conversion",
    date: "2026-07-02",
    readTime: "5 min read",
    body: [
      { type: "p", text: "You can see the visitors in your analytics. People are finding your website. But the phone isn’t ringing and the inbox is quiet. It’s frustrating, and it’s far more common than most business owners realise." },
      { type: "p", text: "The good news is that this is usually a clarity problem, not a traffic problem. And clarity can be fixed." },
      { type: "h2", text: "1. Visitors can’t tell what you do in five seconds" },
      { type: "p", text: "Most people decide whether to stay on a website within a few seconds. If your headline says something vague like “Welcome to our website” or “Quality you can trust”, visitors have to work to understand whether you can help them. Most won’t bother." },
      { type: "p", text: "A strong headline says what you do, who you do it for and why it matters. Plainly." },
      { type: "h2", text: "2. There’s no obvious next step" },
      { type: "p", text: "Every page should answer one question: what should the visitor do now? If your contact details are hidden in the footer, or your only call-to-action is a generic “Learn more”, you’re leaving enquiries on the table." },
      { type: "ul", items: ["Put a clear call-to-action in the first screen of every key page.", "Use specific language like “Get a free quote” instead of “Submit”.", "Repeat the call-to-action after each major section, not just at the bottom."] },
      { type: "h2", text: "3. The mobile experience is an afterthought" },
      { type: "p", text: "For most businesses, the majority of visitors arrive on a phone. If buttons are hard to tap, forms are long or pages load slowly on mobile data, people leave. Test your own site on your phone, on a weak connection, and be honest about the experience." },
      { type: "h2", text: "4. There’s nothing to build trust" },
      { type: "p", text: "People are cautious about who they contact. Reviews, real project photos, clear pricing guidance and a human “about” section all reduce the risk of reaching out. Stock photos and generic copy do the opposite." },
      { type: "quote", text: "A website doesn’t need more visitors to get more enquiries. It needs to make the decision easier for the visitors it already has." },
      { type: "h2", text: "Where to start" },
      { type: "p", text: "Pick your three most visited pages and ask: does this page say clearly what we do, give a reason to trust us and offer one obvious next step? Fixing those three things often makes a noticeable difference before you spend anything on more traffic." },
    ],
  },
  {
    slug: "what-to-do-when-customers-cant-find-you-on-google",
    title: "What To Do When Customers Can’t Find You On Google",
    excerpt:
      "Your customers are searching for what you sell right now. If you’re not showing up, someone else is getting the enquiry. Here’s why, and what to do about it.",
    category: "SEO & Visibility",
    date: "2026-06-24",
    readTime: "6 min read",
    body: [
      { type: "p", text: "Search your main service and your city. If you don’t appear on the first page, you’re invisible to a large share of the people who are ready to buy. They aren’t choosing a competitor because the competitor is better. They’re choosing whoever they can find." },
      { type: "h2", text: "Start with your Google Business Profile" },
      { type: "p", text: "For local businesses, the map results often get the most attention. Your Google Business Profile is free and one of the fastest wins available." },
      { type: "ul", items: ["Choose the most accurate primary category, then add relevant secondary ones.", "Add real photos of your work, team and premises, and keep adding them.", "Ask happy customers for reviews and reply to every one.", "Make sure your name, address and phone match your website exactly."] },
      { type: "h2", text: "Give each service its own page" },
      { type: "p", text: "A single “Services” page listing everything you do makes it hard for Google to understand what you’re relevant for. A dedicated page for each core service, written for the people searching for it, gives you a much better chance of ranking." },
      { type: "h2", text: "Fix the technical basics" },
      { type: "p", text: "Slow pages, broken links, missing titles and sites that don’t work well on mobile all hold you back. None of this is glamorous, but search engines reward websites that are fast, clear and easy to crawl." },
      { type: "h2", text: "Write for questions, not keywords" },
      { type: "p", text: "Think about the questions customers ask you before they buy. How much does it cost? How long does it take? What’s the difference between option A and option B? Answering these clearly on your website builds relevance and trust at the same time." },
      { type: "quote", text: "SEO isn’t a trick. It’s the work of making your business easy to understand, for search engines and for people." },
      { type: "h2", text: "Be patient, but measure" },
      { type: "p", text: "SEO compounds over time. Track the searches you appear for, the clicks you receive and, most importantly, the enquiries that follow. If those numbers are moving in the right direction month over month, you’re on track." },
    ],
  },
  {
    slug: "the-real-cost-of-missed-calls-and-slow-follow-ups",
    title: "The Real Cost Of Missed Calls And Slow Follow-Ups",
    excerpt:
      "Most businesses don’t have a demand problem. They have a response problem. Missed calls and slow follow-ups quietly leak revenue every week.",
    category: "AI Automation",
    date: "2026-06-17",
    readTime: "5 min read",
    body: [
      { type: "p", text: "When a potential customer calls and nobody answers, they rarely leave a voicemail. They call the next business on the list. When an enquiry form sits unanswered until tomorrow, the customer has often already booked someone else." },
      { type: "p", text: "These moments don’t show up on a report, which is exactly why they’re so expensive." },
      { type: "h2", text: "Do the maths on your own business" },
      { type: "p", text: "Estimate how many calls you miss in a typical week, and how many enquiries wait more than an hour for a reply. Multiply by your average job value and a realistic conversion rate. Most owners are surprised by the number." },
      { type: "h2", text: "Speed beats perfection" },
      { type: "p", text: "Customers don’t expect an instant quote. They expect to know they’ve been heard. A quick, friendly response that confirms the next step keeps them from shopping around." },
      { type: "h2", text: "What automation can handle" },
      { type: "ul", items: ["An instant text when a call is missed, with a link to book or request a callback.", "Immediate confirmation emails for every form enquiry.", "Follow-ups for quotes that haven’t been accepted yet.", "Booking reminders that reduce no-shows.", "Review requests sent automatically after a job is complete."] },
      { type: "quote", text: "Automation isn’t about replacing your team. It’s about making sure no customer slips through the cracks while your team is busy doing great work." },
      { type: "h2", text: "Keep it human" },
      { type: "p", text: "Good automation sounds like you. Messages should be written in your voice, hand over to a real person at the right moment and never trap customers in a loop. Done well, customers simply experience a business that’s responsive and organised." },
      { type: "h2", text: "A simple first step" },
      { type: "p", text: "Start with missed-call text-back and instant enquiry confirmation. They’re quick to set up, easy to measure and often pay for themselves within weeks." },
    ],
  },
  {
    slug: "does-your-business-actually-need-a-mobile-app",
    title: "Does Your Business Actually Need A Mobile App?",
    excerpt:
      "Apps can transform how customers interact with your business, or become an expensive distraction. Here’s how to tell the difference.",
    category: "Mobile Apps",
    date: "2026-06-10",
    readTime: "4 min read",
    body: [
      { type: "p", text: "Having an app sounds impressive. But an app only makes sense if people will actually download it, open it and keep using it. Before you invest, it’s worth asking a few honest questions." },
      { type: "h2", text: "Signs an app could be worth it" },
      { type: "ul", items: ["Customers interact with you repeatedly, weekly or monthly, not once a year.", "You manage bookings, memberships, orders or loyalty that would be easier in an app.", "Push notifications would genuinely help customers, not just market to them.", "Your team relies on manual processes that a custom tool could streamline."] },
      { type: "h2", text: "Signs it probably isn’t" },
      { type: "ul", items: ["Customers usually buy from you once or rarely.", "Your website isn’t yet doing its job well.", "The main reason is that competitors have one."] },
      { type: "quote", text: "The best app is one your customers would be disappointed to lose. If you can’t picture that, start with your website." },
      { type: "h2", text: "Consider the alternatives" },
      { type: "p", text: "A fast, mobile-first website with online booking, a customer portal or saved accounts can deliver much of the value of an app at a fraction of the cost. Many businesses start there and build an app once demand is proven." },
      { type: "h2", text: "If you do build, start focused" },
      { type: "p", text: "Launch with the one or two features customers will use most, measure how they use them, then expand. A focused app that works beautifully beats a bloated app that does everything poorly." },
    ],
  },
  {
    slug: "why-your-social-media-isnt-bringing-in-business",
    title: "Why Your Social Media Isn’t Bringing In Business",
    excerpt:
      "Posting regularly but seeing nothing back? The problem usually isn’t effort. It’s that posting was never connected to a strategy.",
    category: "Social Media",
    date: "2026-06-03",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Plenty of businesses post consistently and still see little return. The likes are there, maybe, but the enquiries aren’t. That’s usually because the content was created to fill a calendar, not to move someone closer to buying." },
      { type: "h2", text: "Know what each post is for" },
      { type: "p", text: "Every post should do one of three jobs: build awareness with new people, build trust with people who already know you, or prompt action from people who are ready. If you can’t say which job a post is doing, it probably isn’t doing any." },
      { type: "h2", text: "Show the work, not just the brand" },
      { type: "ul", items: ["Behind-the-scenes clips of real projects.", "Before and after transformations.", "Short answers to common customer questions.", "Customer stories, told in their words."] },
      { type: "h2", text: "Make the next step obvious" },
      { type: "p", text: "Your profile should make it easy to enquire, book or visit your website. If someone loves your content but can’t work out how to contact you in one tap, you’ve lost them." },
      { type: "quote", text: "Social media works best as part of a system. It earns attention, your website earns trust and your follow-up earns the sale." },
      { type: "h2", text: "Measure what matters" },
      { type: "p", text: "Followers and likes are nice, but track profile visits, website clicks and enquiries that mention social. Those numbers tell you whether your content is actually working for the business." },
    ],
  },
  {
    slug: "website-redesign-vs-rebuild",
    title: "Website Redesign vs. Rebuild: Which Does Your Business Need?",
    excerpt:
      "Sometimes a refresh is enough. Sometimes the foundations are the problem. Here’s how to tell which situation your business is actually in.",
    category: "Websites & Conversion",
    date: "2026-05-27",
    readTime: "4 min read",
    body: [
      { type: "p", text: "When a website starts feeling dated, the instinct is to start again. Sometimes that’s right. Sometimes a focused redesign delivers most of the benefit for less time and money. The trick is knowing which you need." },
      { type: "h2", text: "A redesign makes sense when" },
      { type: "ul", items: ["The site is reasonably fast and works well on mobile.", "You can easily update content yourself.", "Search rankings are decent and you don’t want to risk them.", "The main issues are visual style, messaging and calls-to-action."] },
      { type: "h2", text: "A rebuild makes sense when" },
      { type: "ul", items: ["The site is slow, fragile or hard to update.", "It’s built on a platform that limits what you can do.", "Your business has changed and the structure no longer fits.", "Security, accessibility or integration problems keep coming up."] },
      { type: "quote", text: "Don’t judge a website by how it looks alone. Judge it by how well it helps customers choose you, and how easily your team can keep it current." },
      { type: "h2", text: "Protect what’s working" },
      { type: "p", text: "Whichever path you choose, protect your existing search visibility. Map old pages to new ones with proper redirects, keep valuable content and track rankings before and after launch." },
      { type: "h2", text: "Get an outside view" },
      { type: "p", text: "It’s hard to assess your own website objectively. An independent audit can show whether the foundations are sound, and save you from rebuilding something that only needed a refresh, or refreshing something that needed rebuilding." },
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
