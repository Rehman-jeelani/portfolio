/**
 * ==============================================================================
 * ABDUL REHMAN JEELANI — PORTFOLIO CONFIGURATION
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Abdul Rehman Jeelani",
    fullName: "Abdul Rehman Shah Jeelani",
    title: "Web Designer & Developer",
    email: "rehmanxjeelani@gmail.com",
    linkedin: "https://www.linkedin.com/in/abdul-rehman-shah-jeelani-707314359/",
    photo: "assets/abdul-rehman.jpg",
    education: "Bachelor's in Software Engineering (in progress)",
    location: "Pakistan (UTC+5)",
    status: "Available for freelance projects"
  },

  // 3 Actual Live Projects
  projects: [
    {
      id: "digital-dale",
      index: "01",
      title: "Digital Dale",
      category: "Digital Agency Website",
      liveUrl: "https://digitaldale-updated.netlify.app/",
      displayUrl: "digitaldale-updated.netlify.app",
      image: "assets/projects/digital-dell.jpg",
      description: "Digital marketing agency website built for healthcare clinics, showcasing local SEO, Google Ads, and patient acquisition growth systems.",
      contribution: "Designed and built the entire agency website from scratch—including the high-contrast clinical theme, multi-tier service presentation (SEO & Google Ads), conversion-focused audit request funnels, and mobile-first responsive architecture.",
      stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Lead Gen Funnel", "Agency Platform"]
    },
    {
      id: "ezytailor",
      index: "02",
      title: "ezyTailor",
      category: "Application Website",
      liveUrl: "https://ezytailor.netlify.app/",
      displayUrl: "ezytailor.netlify.app",
      image: "assets/projects/ezytailor-app.jpg",
      description: "Promotional website for a tailor shop management application available on Google Play, presenting digital measurements, order tracking, and shop analytics.",
      contribution: "Designed and built the complete product landing page from scratch—including tailor shop management feature showcases, interactive measurement previews, responsive mobile device mockups, and Google Play download funnels.",
      stack: ["HTML5", "CSS3", "JavaScript", "Mobile Mockup UI", "SaaS Showcase", "Landing Page"]
    },
    {
      id: "ezytailor-store",
      index: "03",
      title: "ezyTailor Store",
      category: "E-Commerce / Storefront",
      liveUrl: "https://rehman-jeelani.github.io/ezyTailor-Store/",
      displayUrl: "rehman-jeelani.github.io/ezyTailor-Store",
      image: "assets/projects/ezytailor-store.jpg",
      description: "Specialized online store displaying tailoring equipment, master pattern scales, and workshop supplies with clean pricing and category navigation.",
      contribution: "Architected and built the entire storefront from scratch—including the specialized tailoring equipment catalog, custom pricing display cards, category filtering navigation, and mobile-optimized ordering experience.",
      stack: ["HTML5", "CSS3", "JavaScript", "Product Grid", "E-Commerce UI", "Catalog Layout"]
    }
  ],

  // 4 Services
  services: [
    {
      index: "01",
      name: "Business Websites",
      summary: "Websites that establish credibility and help businesses connect with their target audience.",
      details: "Multi-page or single-page layouts introducing your business, outlining your offerings, and guiding prospective clients to take action."
    },
    {
      index: "02",
      name: "Landing Pages",
      summary: "Focused pages designed to communicate an offer and encourage visitors to take action.",
      details: "High-impact visual flow, fast mobile loading, and clear conversion funnels designed for product releases or dedicated campaigns."
    },
    {
      index: "03",
      name: "Portfolio Websites",
      summary: "Personal and professional websites that showcase work, skills, and identity.",
      details: "Custom-designed editorial digital portfolios for creatives, consultants, and developers wanting a memorable online footprint."
    },
    {
      index: "04",
      name: "Website Redesigns",
      summary: "Improving existing websites through better layouts, responsive design, and usability.",
      details: "Overhauling dated websites into modern, fast, and mobile-friendly experiences with cleaner typography and intuitive navigation."
    }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
