export const NAV_ITEMS = [
  { label: "Works", href: "#works", page: "home" },
  { label: "Pricing", href: "#pricing", page: "home" },
  { label: "Contact", href: "#contact", page: "home" },
];

export const PLANS = [
  {
    id: "p1",
    name: "Essential",
    price: "$999",
    description: "High-conversion single page systems.",
    features: [
      { label: "Type", value: "Static Landing" },
      { label: "Design", value: "Bespoke" },
      { label: "SEO", value: "Standard" },
      { label: "Support", value: "30 Days" },
    ],
  },
  {
    id: "p2",
    name: "Professional",
    price: "$2,499",
    description: "Full-scale dynamic architectures.",
    isPopular: true,
    features: [
      { label: "Type", value: "Multi-Page" },
      { label: "CMS", value: "Included" },
      { label: "Animations", value: "GSAP/High" },
      { label: "Support", value: "90 Days" },
    ],
  },
  {
    id: "p3",
    name: "Enterprise",
    price: "$4,999",
    description: "Complex logic & custom web apps.",
    features: [
      { label: "Type", value: "Custom App" },
      { label: "API", value: "Third-party" },
      { label: "Security", value: "Hardened" },
      { label: "Support", value: "Priority" },
    ],
  },
];

export const SERVICES = [
  {
    id: "1",
    title: "Interface Logic",
    description:
      "Building robust frontend systems with React and Next.js that prioritize performance.",
    icon: "Layout",
  },
  {
    id: "2",
    title: "Data Architecture",
    description:
      "Scalable backend solutions using Node.js, Go, and relational databases.",
    icon: "Database",
  },
  {
    id: "3",
    title: "Atomic Performance",
    description:
      "Optimization protocols ensuring sub-second load times and high Core Web Vitals.",
    icon: "Zap",
  },
  {
    id: "4",
    title: "Visual Engineering",
    description:
      "Creating immersive experiences using GSAP and high-fidelity motion principles.",
    icon: "Activity",
  },
];

export const FAQS = [
  {
    question: "What is your typical project timeline?",
    answer:
      "A standard landing page takes 1-2 weeks, while complex full-stack applications range from 4-8 weeks.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes, I offer monthly maintenance packages to ensure your system remains updated and secure.",
  },
  {
    question: "Can we integrate specific APIs?",
    answer:
      "Absolutely. I specialize in custom API integrations for payment gateways, CMS, and AI tools.",
  },
  {
    question: "Where are you located?",
    answer:
      "I work remotely with a global client base, maintaining flexible hours to accommodate different time zones.",
  },
];