"use client";

import { useEffect, useState } from "react";

export default function SEO({ page }) {

  const [structuredData, setStructuredData] = useState(null);

  useEffect(() => {

    const titles = {
      home: "Sooraj | Digital Product Designer",
      works: "Selected Works | Portfolio of Sooraj",
      about: "About Me | Designer & Developer",
    };

    const descriptions = {
      home:
        "Explore the refined digital portfolio of Sooraj. Expert in building modern, scalable digital experiences.",
      works:
        "A curated collection of digital experiences, architectural systems, and minimalist interfaces.",
      about:
        "Learn about the journey and philosophy of Sooraj.",
    };

    const title = titles[page] || titles.home;
    const description = descriptions[page] || descriptions.home;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');

    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }

    metaDesc.setAttribute("content", description);

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sooraj",
      jobTitle: "Web Developer",
      url: window.location.origin,
      sameAs: [
        "https://github.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
      knowsAbout: [
        "Web Development",
        "Next.js",
        "React",
        "UI/UX Design",
        "System Architecture",
      ],
    });

  }, [page]);

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}