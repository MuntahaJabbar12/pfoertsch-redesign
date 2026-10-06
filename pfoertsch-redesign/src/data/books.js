import b2bSecondEdition from "../assets/books/b2b-brand-management-2nd.png";
import ingredientBranding from "../assets/books/ingredient-branding.png";
import b2bBrandManagement from "../assets/books/b2b-brand-management.png";
import h2hMarketing from "../assets/books/h2h-marketing.png";

export const books = [
  {
    id: 4,
    title: "H2H Marketing: The Genesis of Human-to-Human Marketing",
    authors: "Philip Kotler, Waldemar Pfoertsch & Uwe Sponholz",
    image: h2hMarketing,
    type: "featured",
    publisher: "Springer International Publishing",
    edition: "1st ed. 2021",
    year: 2021,
    description:
      "In H2H Marketing the authors focus on redefining the role of marketing by reorienting the mindset of decision-makers and integrating the concepts of Design Thinking, Service-Dominant Logic and Digitalization.",
    springerUrl: "https://www.springer.com/book/9783030595302",
    amazonAuthorUrl: "https://www.amazon.com/stores/author/B00D71YZ6O",
  },

  {
    id: 1,
    title: "B2B Brand Management",
    authors: "Philip Kotler & Waldemar Pfoertsch",
    image: b2bSecondEdition,
    type: "amazon",
    publisher: "Springer",
    edition: "Second Edition",
    description:
      "A comprehensive perspective on B2B brand management, performance branding, transformative marketing and artificial intelligence.",
    amazonUrl: "#",
  },

  {
    id: 2,
    title: "Ingredient Branding",
    authors: "Philip Kotler & Waldemar Pfoertsch",
    image: ingredientBranding,
    type: "amazon",
    publisher: "Springer",
    description:
      "Exploring the strategy of ingredient branding and how invisible components can become visible brands.",
    amazonUrl: "#",
  },

  {
    id: 3,
    title: "B2B Brand Management",
    authors: "Philip Kotler & Waldemar Pfoertsch",
    image: b2bBrandManagement,
    type: "amazon",
    publisher: "Springer",
    description:
      "A foundational work on B2B brand management and strategic branding.",
    amazonUrl: "#",
  },
];