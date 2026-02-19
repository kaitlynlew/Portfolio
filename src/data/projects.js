export const PROJECTS = [
  {
    id: "safespace",
    title: "SafeSpace",
    description:
      "An anonymous reporting app for gender minorities in the trades industry to record incidents, build awareness, and push for change.",
    tags: ["App", "Website", "UI/UX Design", "UI/UX Development"],
    image: "/images/safespace-mockup.png",
    category: "uiux",
  },
  {
    id: "sojubly",
    title: "Sojubly",
    description:
      "A sparkling soju drink design created with bright colours and playful, modern visuals to convey a fun, refreshing, and youthful brand identity.",
    tags: ["Graphic Design", "Branding", "Illustration"],
    image: "/images/sojubly-mockup.jpg",
    category: "graphic",
  },
  {
    id: "inklink",
    title: "InkLink",
    description:
      "A collaborative chain writing web app for writers to jump into story chains, add their own twist, and watch narratives grow beyond imagination.",
    tags: ["App", "Website", "UI/UX Design"],
    image: "/images/inklink-mockup.png",
    category: "uiux",
  },
  {
    id: "korea",
    title: "Korea Travel Brochure",
    description:
      "A travel brochure for Korea designed with modern layouts and vibrant visuals to highlight the country’s culture, landmarks, and sense of adventure.",
    tags: ["Graphic Design", "Layout Design", "Illustration"],
    image: "/images/korea-brochure-mockup.jpg",
    category: "graphic",
  },
  {
    id: "katseye",
    title: "Katseye Posters",
    description:
      "A concept poster series for KATSEYE, using bold visuals and dynamic lighting to capture the group’s confident, modern, and globally driven pop identity.",
    tags: ["Graphic Design", "Illustration"],
    image: "/images/katseye-mockup.jpg",
    category: "graphic",
  },
  // {
  //   id: "slotion",
  //   title: "Slotion",
  //   description:
  //     "Promoting sustainable fashion by encouraging individuals to make the most of the clothes they already own.",
  //   tags: ["App", "UI/UX Design"],
  //   image: "/images/slotion-mockup.png",
  //   category: "uiux",
  // },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
