/**
 * Case study content for graphic design project pages.
 * Add a new object keyed by project id to add or edit a project's case study.
 * Omit a project id to show the under-construction page for that project.
 */

export const PROJECT_CASE_STUDIES = {
  sojubly: {
    bannerImage: "/images/sojubly-mockup.jpg",
    subtitle: "November 2025 (2 Weeks)",
    role: "Graphic Designer",
    skills: "UX/UI Design Branding Illustration",
    tools: ["Illustrator", "Photoshop"],
    heroImage: "/images/Sojubly-All.jpg",
    designIntentText: [
      "The design for Sojubly focuses on capturing a bright, bubbly, and playful personality that reflects the light, fizzy nature of a carbonated soju spritz. Pastel colours, clean typography, and simple graphic elements are used to clearly distinguish each flavour while keeping the overall look cohesive and modern. The packaging balances fun and clarity, making the product easy to recognize and approachable on the shelf.",
      "Designed with a younger, social target audience in mind, Sojubly's visuals appeal to consumers who enjoy casual hangs, pre-drinks, and shareable moments, reinforcing the brand as a fun, easygoing alcoholic beverage meant to be enjoyed with friends.",
    ],
    designIntentImage: {
      src: "/images/sojubly-sketches.png",
      alt: "Sojubly Sketches",
    },
    dielineImages: [
      { src: "/images/sojuby-peach-dieline.png", alt: "Sojubly Peach Dieline" },
      {
        src: "/images/sojuby-yogurt-dieline.png",
        alt: "Sojubly Yogurt Dieline",
      },
      { src: "/images/sojuby-mango-dieline.png", alt: "Sojubly Mango Dieline" },
    ],
    finalDesignSlides: [
      { src: "/images/Sojubly-Peach.jpg", alt: "Sojubly Peach" },
      { src: "/images/Sojubly-Yogurt.jpg", alt: "Sojubly Yogurt" },
      { src: "/images/Sojubly-Mango.jpg", alt: "Sojubly Mango" },
    ],
  },

  korea: {
    bannerImage: "/images/korea-brochure-mockup.jpg",
    subtitle: "October 2025 (3 Weeks)",
    role: "Graphic Designer",
    skills: "Layout Design, Branding, Illustration",
    tools: ["Illustrator", "InDesign"],
    heroImage: "/images/Korea-Brochure.jpg",
    heroImageAlt: "Korea Travel Brochure — Seoul to Jeju-si",
    designIntentText: [
      "Designed with curious, adventure-seeking travellers in mind—particularly younger audiences and first-time visitors—the overall design balances inspiration with clarity, encouraging exploration and positioning Korea as an exciting, accessible, and must-visit destination.",
      "Blending tradition with modernity, the brochure highlights expressive portraits and authentic everyday moments to create a personal, relatable connection to the culture. Instead of simply presenting landmarks, it immerses readers in experiences, helping them picture themselves there and ultimately motivating them to turn that interest into a trip.",
    ],
    designIntentImage: {
      src: "/images/korea-brochure-mockup2.jpg",
      alt: "Soul of South Korea brochure in rattan tray",
    },
    showDieline: false,
    // Final design image (single image above the carousel). Put your image in public/images/ and use path like "/images/your-file.jpg"
    finalDesignImage: {
      src: "/images/korea-brochure-mockup.jpg",
      alt: "Soul of South Korea brochure — final design",
    },
    finalDesignSlides: [
      { src: "/images/korea-brochure-1.png", alt: "Brochure pages 1" },
      { src: "/images/korea-brochure-2-3.png", alt: "Brochure pages 2-3" },
      { src: "/images/korea-brochure-4-5.png", alt: "Brochure pages 4-5" },
      { src: "/images/korea-brochure-6-7.png", alt: "Brochure pages 6-7" },
      { src: "/images/korea-brochure-10-11.png", alt: "Brochure pages 8-9" },
      { src: "/images/korea-brochure-12.png", alt: "Brochure pages 10-11" },
    ],
  },

  // Add katseye (and copy this block) when ready to publish the case study.
  // katseye: { ... },
};

export function getCaseStudyByProjectId(projectId) {
  return PROJECT_CASE_STUDIES[projectId] ?? null;
}
