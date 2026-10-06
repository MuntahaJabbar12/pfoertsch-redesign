import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./Articles.css";

function Articles() {
  const { t } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    // =========================================================
    // PEER REVIEWED ARTICLE PUBLICATIONS
    // =========================================================
    {
      id: "kyriacou-2026-values",
      type: "peer_reviewed",
      year: 2026,
      authors: "Evdoxia Kyriacou, Waldemar Pfoertsch",
      title:
        "Values-Driven Internal Branding and Stakeholder Value Co-Creation in Services",
      journal: "Journal of Services Marketing",
      date: "2026",
      status: "under review",
      abstract:
        "This paper explores the alignment of internal branding with stakeholder values to enhance value co-creation across service ecosystems.",
    },
    {
      id: "pfoertsch-2024-nudging",
      type: "peer_reviewed",
      year: 2024,
      authors:
        "Waldemar Pfoertsch, Christian Koch, Philipp Brüggemann",
      title:
        "Guiding Customer Choices: The Impact of Digital Nudging on Preferred Decisions Throughout the Customer Journey",
      journal:
        "Advances in Digital Marketing and eCommerce (Springer)",
      date: "2024",
      doi: "https://doi.org/10.1007/978-3-031-62135-2_20",
      link: "https://doi.org/10.1007/978-3-031-62135-2_20",
      editor:
        "Francisco J. Martínez-López, Luis F. Martinez, Philipp Brüggemann (Eds.)",
      abstract:
        "Analyzes how subtle digital nudges influence decision-making frameworks across multiple touchpoints in the digital customer journey.",
    },
    {
      id: "pfoertsch-2024-ai-banking",
      type: "peer_reviewed",
      year: 2024,
      authors:
        "Pfoertsch, Waldemar, Sulaj, Kejsi, Fatbardha Morina",
      title:
        "THE INTEROPERATION OF ARTIFICIAL INTELLIGENCE AND CUSTOMER EXPERIENCE IN THE BANKING INDUSTRY: AN EMPIRICAL ANALYSIS OF THE SERVICE QUALITY IMPACT OF CHATBOTS AND VIRTUAL ASSISTANTS",
      journal: "Sage Open",
      date: "2024",
      status: "forthcoming",
      abstract:
        "Empirical study examining how AI-driven chatbots and virtual assistants reshape service quality perceptions in banking environments.",
    },
    {
      id: "pfoertsch-2024-5es",
      type: "peer_reviewed",
      year: 2024,
      authors: "Waldemar Pfoertsch, Kejsi Sulaj",
      title:
        "Introducing 5Es Marketing-Mix: A New Framework for Effective Marketing in the Digital Age",
      journal: "Academy of Strategic Management Journal",
      volume: "23",
      issue: "2",
      date: "2024",
      issn: "Print ISSN: 1544-1458; Online ISSN: 1939-6104",
      link: "https://www.abacademies.org/articles/introducing-5es-marketingmix-a-new-framework-for-effective-marketing-in-the-digital-age-16613.html",
      abstract:
        "Proposes a modernized 5Es marketing-mix framework designed to supersede traditional models in hyper-connected digital markets.",
    },
    {
      id: "pfoertsch-2023-water-satisfaction",
      type: "peer_reviewed",
      year: 2023,
      authors: "Pfoertsch, Waldemar, Sulaj, Kejsi",
      title:
        "The Impact of Brand Performance and Brand Response on Customer Satisfaction: How do Brand Performance and Brand Response influence Consumer Satisfaction when Purchasing bottled Water in Durres, Albania?",
      journal: "Global Journal of Management and Marketing",
      volume: "7",
      issue: "1",
      pages: "19",
      date: "2023",
      abstract:
        "Empirical analysis investigating the correlation between brand execution and consumer satisfaction metrics in regional FMCG sectors.",
    },
    {
      id: "sulaj-2023-water-behavior",
      type: "peer_reviewed",
      year: 2023,
      authors: "Sulaj, K & Pfoertsch, W, A.",
      title:
        "Purchasing Behavior: Empirical Analysis Of Brand Factors Influencing Consumers of Bottled Water In Albania",
      journal: "European Journal of Marketing and Economics",
      date: "October 2023",
      abstract:
        "Examines consumer behavior drivers and brand equity factors shaping purchasing decisions in the bottled water market.",
    },
    {
      id: "kotler-2021-h2h",
      type: "peer_reviewed",
      year: 2021,
      authors: "Philip Kotler, Waldemar Pfoertsch, Uwe Sponholz",
      title:
        "H2H MARKETING: PUTTING TRUST AND BRAND IN STRATEGIC MANAGEMENT FOCUS",
      journal: "Academy of Strategic Management Journal",
      volume: "20",
      issue: "Special Issue 2",
      pages: "1939-6104-20-S2-82",
      date: "2021",
      link: "https://www.abacademies.org/articles/h2h-marketing-putting-trust-add-brand-in-strategic-management-focus.pdf",
      abstract:
        "Outlines Human-to-Human (H2H) marketing imperatives, repositioning trust and authentic human connection at the core of strategic management.",
    },
    {
      id: "aldilax-2020-swot-ahp",
      type: "peer_reviewed",
      year: 2020,
      authors: "Aldilax, D., & Pfoertsch, W. A.",
      title:
        "Application of combined SWOT and AHP for strategy development: a case of slow fashion brand in Bandung, Indonesia",
      journal: "The Asian Journal of Technology Management",
      volume: "13",
      issue: "3",
      pages: "213-228",
      date: "2020",
      link: "https://www.academia.edu/118843173/Application_of_Combined_SWOT_and_AHP_for_Strategy_Development_A_Case_of_Slow_Fashion_Brand_in_Bandung_Indonesia",
      abstract:
        "Combines SWOT and Analytic Hierarchy Process (AHP) methodologies to evaluate strategic growth pathways for sustainable slow fashion brands.",
    },
    {
      id: "pfoertsch-2017-b2b-multibrand",
      type: "peer_reviewed",
      year: 2017,
      authors: "Waldemar Pfoertsch, Aaron Leander Haußmann",
      title:
        "Challenges in Complex B2B Multi-Brand Architectures. Aligning Brand Portfolio Strategy and Brand Portfolio Management B2B Companies",
      journal:
        "Communicating Brands in an Increasingly Digital Environment (Athens Institute for Education & Research)",
      editor:
        "Carla Ruiz-Mafe, Joaquin Aldas-Manzano, Cleopatra Veloutsou",
      date: "2017",
      abstract:
        "Addresses architectural challenges in managing complex multi-brand portfolios across industrial business-to-business sectors.",
    },
    {
      id: "pfoertsch-2016-host-brand",
      type: "peer_reviewed",
      year: 2016,
      authors:
        "Waldemar Pfoertsch, Volkan Polat, Ahmet Tuncay Nergis, Ali Ekber Akgun",
      title: "Ingredient Brand Versus Host Brand in Smartphone Market",
      journal:
        "Let’s Get Engaged! Crossing the Threshold of Marketing’s Engagement Era (Springer)",
      date: "January 2016",
      doi: "https://doi.org/10.1007/978-3-319-11815-4_229",
      link: "https://doi.org/10.1007/978-3-319-11815-4_229",
      abstract:
        "Investigates the dynamics between ingredient branding signals and primary host brand perception in consumer smartphone choice.",
    },
    {
      id: "pfoertsch-2012-profitability",
      type: "peer_reviewed",
      year: 2012,
      authors: "Waldemar Pfoertsch",
      title: "Profitability, Growth, and Brand Value",
      journal: "The IUP Journal of Brand Management",
      volume: "IX",
      issue: "1",
      pages: "40-50",
      date: "March 2012",
      abstract:
        "Evaluates the direct structural linkages connecting long-term brand equity accumulation with firm profitability and corporate growth.",
    },
    {
      id: "pfoertsch-2012-b2b-knowledge",
      type: "peer_reviewed",
      year: 2012,
      authors: "Waldemar Pfoertsch, Hendrik Scheel",
      title:
        "What’s a Business-to-Business company? B2B knowledge of future business leaders",
      journal:
        "Advances in Business Marketing and Purchasing, Volume 16: Business and Industrial Marketing Management",
      date: "March 2012",
      abstract:
        "Assesses B2B marketing literacy and conceptual understanding among upcoming corporate executives and business leaders.",
    },
    {
      id: "pfoertsch-2011-ingredient-stages",
      type: "peer_reviewed",
      year: 2011,
      authors: "Waldemar Pfoertsch, Junsong Chen",
      title:
        "Measuring the value of Ingredient Brand equity at multiple stages in the supply chain: A component supplier’s perspective",
      journal:
        "Academy of Marketing Study Journal (Special Issue) & CEIBS International Business Review",
      volume: "15",
      issue: "1",
      pages: "71-82",
      date: "August 2011",
      abstract:
        "Presents a multi-stage equity evaluation framework measuring value spillover effects of component branding across extended supply networks.",
    },
    {
      id: "pfoertsch-2007-inbranding",
      type: "peer_reviewed",
      year: 2007,
      authors:
        "Waldemar Pfoertsch, Cheryl Ann Luczak, Frederik Beuk, Jennifer D. Chandler",
      title: "InBranding: Development of a Conceptual Model",
      journal: "Academy of Marketing Studies Journal",
      volume: "11",
      pages: "123-135",
      date: "2007",
      abstract:
        "Formulates a theoretical model outlining the internal mechanisms, strategic levers, and market impacts of InBranding practices.",
    },
    {
      id: "kotler-2007-being-known",
      type: "peer_reviewed",
      year: 2007,
      authors: "Philip Kotler, Waldemar Pfoertsch",
      title:
        "Being Known or Being One of Many - The need for Brand Management for Business-to-Business (B2B) Companies",
      journal: "Journal of Business & Industrial Marketing (JBIM)",
      date: "Fall 2007",
      abstract:
        "Highlights why traditional commodity B2B organizations must transition to deliberate strategic brand management to prevent commoditization.",
    },
    {
      id: "kotler-2007-b2b-rev",
      type: "peer_reviewed",
      year: 2007,
      authors: "Philip Kotler, Waldemar Pfoertsch",
      title: "B2B Brand Management",
      journal: "The Marketing Review",
      volume: "7",
      issue: "2",
      pages: "201-203",
      date: "2007",
      abstract:
        "Reviews foundational principles and future growth trajectories for strategic B2B brand management paradigms.",
    },
    {
      id: "pfoertsch-2007-learning-region",
      type: "peer_reviewed",
      year: 2007,
      authors: "Waldemar Pfoertsch, Reha Toezuen",
      title:
        "Assiduous Firms in a “Learning Region” - The Case of East-Wuerttemberg, Germany",
      journal:
        "Innovations and Entrepreneurship in Functional Regions (University West, Uddevalla, Sweden)",
      editor: "Jan Johannson",
      date: "2007",
      abstract:
        "Analyzes regional innovation dynamics and enterprise learning clusters within the industrial powerhouse of East-Wuerttemberg.",
    },

    // =========================================================
    // ARTICLES IN VARIOUS PAPERS & PRESS
    // =========================================================
    {
      id: "kyriakou-2026-branding-journal",
      type: "press",
      year: 2026,
      authors: "Evdoxia Kyriakou, Waldemar A. Pfoertsch",
      title:
        "Internal Branding: A complete guide for building your brand from the inside out",
      journal: "The Branding Journal",
      date: "June 2026",
      link: "https://www.thebrandingjournal.com/2026/06/internal-branding-a-complete-guide-for-building-your-brand-from-the-inside-out/",
      abstract:
        "Comprehensive playbook on aligning employee culture with outward brand promises to drive authentic brand adoption.",
    },

    {
      id: "oppelt-2025-top-brands",
      type: "press",
      year: 2025,
      authors: "Julian Oppelt",
      title:
        "How Top Brands Are Dominating the Global Stage: Rise in Brand Value, Key Strategies, and Future Outlook",
      journal: "The Branding Journal",
      date: "April 4, 2025",
      link: "https://www.thebrandingjournal.com/?p=177892&preview=1&_ppp=27675f471f",
      abstract:
        "An analysis of global market share expansion and brand equity building techniques employed by world-leading commercial enterprises.",
    },

    {
      id: "pfoertsch-2020-aditya-birla",
      type: "press",
      year: 2020,
      authors: "Waldemar Pfoertsch, Maximilian Haas",
      title:
        "Implementing Ingredient Branding - A playbook for Aditya Birla Group Businesses based on the Birla Cellulose Success",
      journal: "ABG Mumbai Report",
      date: "August 2020",
      abstract:
        "Case analysis and operational framework detailing ingredient branding implementation strategies across global textile divisions.",
    },

    {
      id: "pfoertsch-2020-digital-nudging",
      type: "press",
      year: 2020,
      authors: "Waldemar Pfoertsch, Christian Koch",
      title:
        "Digital Nudging in der customer Journey – ein online Feldversuch",
      journal: "Konturen, Pforzheim University",
      date: "July 2020",
      abstract:
        "Presents empirical results from an online field experiment evaluating choice architecture impacts on consumer conversion rates.",
    },

    {
      id: "pfoertsch-2017-liva-huffpost",
      type: "press",
      year: 2017,
      authors: "Waldemar Pfoertsch, O’Brien Browne",
      title:
        "Liva – the Mega Brand that Will Open India to the World",
      journal: "Huffington Post",
      date: "April 28, 2017",
      link: "https://www.huffpost.com/entry/liva-the-mega-brand-that-will-open-india-to-the-world_b_59039a04e4b05279d4edbbca",
      abstract:
        "Explores the market rise of ingredient brand Liva and its strategic positioning across Indian and international fashion markets.",
    },

    {
      id: "pfoertsch-2016-trusted-references",
      type: "press",
      year: 2016,
      authors: "Waldemar Pförtsch",
      title: "Digitales Referenzmarketing muss systematisiert werden",
      journal: "Trusted References",
      date: "September 2016",
      abstract:
        "Advocates for formal systemization of digital reference marketing assets to convert buyer trust into measurable commercial growth.",
    },

    {
      id: "pfoertsch-2010-china-giants",
      type: "press",
      year: 2010,
      authors: "Waldemar Pfoertsch, Yipeng Liu",
      title:
        "China’s Emerging Giants: A Comparison of Chinese and German Overseas M&As in the Machinery Sector",
      journal: "BusinessForum China, Shanghai",
      date: "November 2010",
      abstract:
        "Comparative analysis of cross-border acquisition strategies executed by Chinese versus German industrial machinery firms.",
    },

    {
      id: "pfoertsch-2010-expo",
      type: "press",
      year: 2010,
      authors: "Waldemar Pfoertsch",
      title: "Expo 2010: Is it worth it?",
      journal: "Global Times China, Beijing",
      date: "June 7, 2010",
      abstract:
        "Evaluates the strategic ROI and global soft-power branding implications of hosting World Expo events in China.",
    },

    {
      id: "pfoertsch-2010-dow-corning",
      type: "press",
      year: 2010,
      authors: "Waldemar Pfoertsch",
      title:
        "Dow Corning: Dual Branding successful survival in B2B Markets (道康宁：B2B市场的双品牌生存)",
      journal: "CEIBS Business Review, Issue 04 2010, Shanghai",
      date: "April 2010",
      abstract:
        "Examines Dow Corning's dual-brand portfolio strategy addressing distinct value and premium industrial customer segments.",
    },

    {
      id: "pfoertsch-2010-china-multinational",
      type: "press",
      year: 2010,
      authors: "Waldemar Pfoertsch",
      title:
        "China’s Multinational Future - China is building its corporate giants in many different ways",
      journal:
        "China International Business, Issue 04 2010, Shanghai",
      date: "April 2010",
      abstract:
        "Outlines structural pathways Chinese corporate entities utilize to build global multinational footprints.",
    },

    {
      id: "pfoertsch-2010-truly-made-in-china",
      type: "press",
      year: 2010,
      authors: "Waldemar Pfoertsch",
      title:
        "Truly Made in China - Products originating and made in China identified as “Time-honored Brands”",
      journal: "BusinessForum China, Shanghai",
      date: "February 2010",
      abstract:
        "Highlights how historic heritage brands in China can transition from low-cost supply labels to global premium status.",
    },

    {
      id: "pfoertsch-2009-springboard",
      type: "press",
      year: 2009,
      authors: "Waldemar Pfoertsch",
      title: "Springboard for tapping potential",
      journal:
        "China Daily Special Issue 60th Anniversary of the People’s Republic of China, Beijing",
      date: "October 1, 2009",
      abstract:
        "Reflects on foreign investment transformations and economic modernization initiatives across China over six decades.",
    },

    {
      id: "oliva-2009-isbm",
      type: "press",
      year: 2009,
      authors:
        "Ralph Oliva, Raj Srivastava, Waldemar Pfoertsch, Jennifer Chandler",
      title: "Insights on Ingredient Branding",
      journal:
        "ISBM Report 08-2009, Pennsylvania State University",
      date: "2009",
      abstract:
        "Industry research report summarizing structural insights and practical execution guidelines for ingredient brand equity creation.",
    },

    {
      id: "pfoertsch-2007-classification",
      type: "press",
      year: 2007,
      authors:
        "Waldemar Pfoertsch, Frederick Beuk, Cheryl Luczak",
      title:
        "Classification of Brands: The case for B2B, B2C and B2B2C",
      journal:
        "Proceedings of the Academy of Marketing Studies, Volume 12, Jacksonville",
      date: "2007",
      abstract:
        "Proposes a multi-dimensional typology classifying brand architectures across B2B, B2C, and intermediate B2B2C structures.",
    },

    {
      id: "strasser-2007-second-life",
      type: "press",
      year: 2007,
      authors: "Pit Strasser, Waldemar Pförtsch",
      title:
        "Mit einem Mausklick etwas gegen den Klimawandel tun: Marketingstudenten engagieren sich in Second Life",
      journal: "SL Talk",
      date: "September 2007",
      abstract:
        "Details student-led virtual reality campaign initiatives promoting climate change awareness within the Second Life platform.",
    },

    {
      id: "pfoertsch-2007-product-placement-1",
      type: "press",
      year: 2007,
      authors: "Waldemar Pfoertsch",
      title:
        "B2B Companies use Product Placement in the new James Bond movie to promote their Brands",
      journal: "Marketing Digest 1",
      date: "2007",
      abstract:
        "Examines non-traditional B2B promotional strategies utilizing high-profile entertainment media integrations.",
    },

    {
      id: "pfoertsch-2007-mittelstand",
      type: "press",
      year: 2007,
      authors: "Waldemar Pförtsch",
      title:
        "Markierung von Innen heraus, Ingredient Branding als Erfolgskonzept",
      journal: "marketing-im-mittelstand.com",
      date: "April 2007",
      abstract:
        "Provides practical ingredient branding execution steps customized for medium-sized German Mittelstand manufacturers.",
    },

    {
      id: "pfoertsch-2007-james-bond-new-holland",
      type: "press",
      year: 2007,
      authors: "Waldemar Pfoertsch",
      title:
        "When the going gets tough, the tough gets going: James Bond drives the New Holland - Product placement for B2B companies",
      journal: "B2B Marketing Trend, 10",
      date: "2007",
      abstract:
        "Analyzes the commercial impact of New Holland heavy machinery integration in Bond film franchises.",
    },

    {
      id: "pfoertsch-2007-product-placement-royale",
      type: "press",
      year: 2007,
      authors: "Waldemar Pfoertsch",
      title:
        "Product Placement Royale - B2B Companies use the new James Bond Movie to promote their Brands",
      journal: "Marketing Digest, 2",
      date: "2007",
      abstract:
        "Further explores how B2B industrial component manufacturers leverage blockbuster media placements for target audience exposure.",
    },

    {
      id: "pfoertsch-2007-b2b2c-bewertung",
      type: "press",
      year: 2007,
      authors: "Waldemar Pfoertsch, Christian Linder",
      title:
        "Business-to-Business-to-Customer: Von der Bewertung von Business-to-Business Marken zum Ingredient Brand",
      journal: "Marketing Digest, 2",
      date: "2007",
      abstract:
        "Traces evaluation metrics moving from pure B2B corporate brand measurement to pull-strategy ingredient branding.",
    },

    {
      id: "pfoertsch-2006-st-gallen",
      type: "press",
      year: 2006,
      authors: "Waldemar Pförtsch",
      title: "B2B Markenmanagement Exzellenz",
      journal:
        "b2b-excellence letter, University of St. Gallen, Switzerland",
      date: "December 2006",
      abstract:
        "Synthesizes best-practice criteria for excellence in industrial B2B brand architecture execution.",
    },

    {
      id: "pfoertsch-2006-think-big",
      type: "press",
      year: 2006,
      authors: "Waldemar Pfoertsch",
      title:
        "Think Big in Small Things - Challenges and Opportunities of Ingredient Branding",
      journal:
        "ISBM B-to-B Academic Conference Proceedings",
      date: "August 2006",
      abstract:
        "Highlights strategic competitive advantages unlocked when small component suppliers build recognized ingredient brands.",
    },

    {
      id: "pfoertsch-2007-ifam-prinzipien",
      type: "press",
      year: 2007,
      authors: "Waldemar Pförtsch",
      title: "7 erfolgreiche Prinzipien der schnellen Markenbildung im B2B",
      journal:
        "IFAM Institut für angewandte Marketing-Wissenschaften",
      date: "Mai 2007",
      abstract:
        "Presents seven accelerated principles for establishing rapid, high-trust brand equity in industrial B2B markets.",
    },

    {
      id: "pfoertsch-2006-markierung-innen",
      type: "press",
      year: 2006,
      authors: "Waldemar Pförtsch",
      title: "Markierung von innen heraus- Ingredient Branding",
      journal: "Marketing Digest, 2",
      date: "2006",
      abstract:
        "Explores the internal operational alignment required to launch ingredient branding initiatives successfully.",
    },

    {
      id: "pfoertsch-2006-pro-manager",
      type: "press",
      year: 2006,
      authors: "Waldemar Pförtsch",
      title:
        "Erfolgschance für die mittelständische Industrie: B2B Markenmanagement",
      journal: "Praxisreport pro-manager",
      date: "2006",
      abstract:
        "Focuses on strategic advantages mid-sized industrial suppliers gain by implementing formal B2B brand frameworks.",
    },

    {
      id: "pfoertsch-2004-bulgaria",
      type: "press",
      year: 2004,
      authors: "Pförtsch, Waldemar, Micheva, Eva",
      title: "„Ingredient Branding“ für Automobilzulieferer",
      journal: "Marketing Management Bulgaria, 7",
      date: "2004",
      abstract:
        "Examines ingredient branding strategy applicability within international automotive supplier chains.",
    },

    {
      id: "pfoertsch-2004-aquisa-wissen",
      type: "press",
      year: 2004,
      authors: "Pförtsch, Waldemar, Annina Oppinger",
      title:
        "Das Wissen des Kunden Nutzen – der kunde will einbezogen werden",
      journal: "aquisa, 4",
      date: "2004",
      abstract:
        "Discusses customer co-creation methods and integrating buyer feedback into early product design stages.",
    },

    {
      id: "pfoertsch-2004-aquisa-couponing",
      type: "press",
      year: 2004,
      authors: "Pförtsch Waldemar",
      title:
        "Amerikaner liegen bei der Schnipsel-Jagd vorn - Couponing",
      journal: "aquisa, 2",
      date: "2004",
      abstract:
        "Comparative analysis of US consumer promotion tactics and digital coupon redemption behavior.",
    },

    {
      id: "pfoertsch-2004-womanagement",
      type: "press",
      year: 2004,
      authors: "Pförtsch, Waldemar",
      title: "Chancen für Frauen im internationalen Business",
      journal:
        "Konferenzdokumentation WOManagement, Pforzheim",
      date: "April 2004",
      abstract:
        "Assesses career growth avenues and leadership advancement opportunities for female executives in global trade.",
    },

    {
      id: "pfoertsch-2003-globalisierung",
      type: "press",
      year: 2003,
      authors: "Pförtsch, Waldemar",
      title:
        "Globalisierung als betriebswirtschaftliche Herausforderung",
      journal:
        "Interkulturelle Kompetenz in der beruflichen Bildung (W. Bertelsmannverlag)",
      editor: "Osterwalder, Alois (Ed.)",
      date: "2003",
      abstract:
        "Analyzes management challenges and cross-cultural skill requirements in globalized enterprise environments.",
    },

    {
      id: "pfoertsch-2002-interkulturelle",
      type: "press",
      year: 2002,
      authors: "Pförtsch, Waldemar",
      title:
        "Interkulturelle Kompetenz in einer globalisierten Wirtschaft",
      journal: "Ostasien-Institut e.V. & BIBB, Bonn",
      date: "Juli 2002",
      abstract:
        "Discusses structural frameworks for acquiring cross-cultural competency during vocational and higher education.",
    },

    {
      id: "pfoertsch-2003-internships",
      type: "press",
      year: 2003,
      authors: "Pförtsch, Waldemar, Frey, Nicole",
      title: "The Success of International Internships",
      journal:
        "Proceedings: 3rd Global Internship Congress, Stuttgart",
      date: "April 8, 2003",
      abstract:
        "Presents empirical evaluation metrics verifying career readiness gains delivered through global placement programs.",
    },

    {
      id: "pfoertsch-2003-crm-usa",
      type: "press",
      year: 2003,
      authors: "Pförtsch, Waldemar",
      title:
        "Wie macht man Customer Relationship Management in den USA?",
      journal: "Online Absatzwirtschaft",
      date: "20.01.2003",
      abstract:
        "Evaluates CRM strategy implementation differences and data-driven customer loyalty approaches in US markets.",
    },

    {
      id: "hipp-1993-investment",
      type: "press",
      year: 1993,
      authors: "Hipp, Hilde, Pförtsch Waldemar",
      title: "German Investment in the USA",
      journal: "Best Business Locations 1993-94, München",
      date: "1993",
      abstract:
        "Presents market entry trends, location selection metrics, and foreign direct investment patterns of German firms in the US.",
    },

    {
      id: "pfoertsch-1993-wettbewerb",
      type: "press",
      year: 1993,
      authors: "Pförtsch, Waldemar, Schiller, Erwin",
      title:
        "Wettbewerb und Kooperation: Unternehmenskooperationen im europäischen Wirtschaftsraum",
      journal: "Spiegel der Wirtschaft Baden-Württemberg 2/93",
      date: "1993",
      abstract:
        "Examines competitive and collaborative inter-firm alliances across the European Economic Area.",
    },

    {
      id: "pfoertsch-1992-globalization-relocation",
      type: "press",
      year: 1992,
      authors: "Waldemar Pförtsch",
      title: "Globalization and Relocation Requirements",
      journal: "Best Business Locations 1993, Munich",
      date: "1992",
      abstract:
        "Details operational factors driving industrial site selection and corporate relocation decisions globally.",
    },

    {
      id: "han-1990-decision-support",
      type: "press",
      year: 1990,
      authors: "Man Han, Pfoertsch, Waldemar, Srivastava, Alok",
      title:
        "Using Decision Support and Expert Systems Technologies to Develop Comprehensive and Integrated Planning Systems",
      journal:
        "Proceedings: 21st Annual Decision Science Institute, San Diego",
      date: "November 1990",
      abstract:
        "Explores early expert system integration for corporate strategic decision support.",
    },

    {
      id: "pfoertsch-1989-appliances",
      type: "press",
      year: 1989,
      authors: "Waldemar Pförtsch",
      title:
        "Measures to Penetrate the U.S. Market of Home Electric Appliances",
      journal:
        "Matsushita Electric Industrial Co., Ltd., Chicago",
      date: "1989",
      abstract:
        "Strategic study detailing market entry recommendations for Japanese consumer electronics expansion into the US.",
    },

    {
      id: "pfoertsch-1989-mandarin-planning",
      type: "press",
      year: 1989,
      authors: "Pfoertsch, Waldemar",
      title:
        "Strategic Planning for Enterprises, (translated into Mandarin): Segmentation and Sales Channels",
      journal:
        "The Journal of Technology Introduction, Issue 1, Page 312ff., Beijing",
      date: "February 1989",
      abstract:
        "Presents segmentation methodologies and sales channel design frameworks for enterprise strategic planning.",
    },

    {
      id: "pfoertsch-1986-malawi",
      type: "press",
      year: 1986,
      authors: "Pfoertsch, Waldemar",
      title:
        "Malawi: Promotion of small scale activities in the rural growth centres of the northern region",
      journal:
        "Rural Growth Center Project: Office of the President, Lilongwe, Malawi",
      date: "November 1986",
      abstract:
        "Field study and economic development plan for small-scale rural enterprise development in Northern Malawi.",
    },

    {
      id: "pfoertsch-1984-jamaica",
      type: "press",
      year: 1984,
      authors: "Pfoertsch, Waldemar",
      title:
        "Jamaica: Sector Study on Electrical and Electronic Industry Development Status",
      journal:
        "German Agency for Technical Cooperation (GTZ)",
      date: "December 1984",
      abstract:
        "Sector study evaluating Jamaica’s potential as an export production base for European technical partnerships.",
    },

    {
      id: "kahleyss-1983-sierra-leone",
      type: "press",
      year: 1983,
      authors: "Kahleyss, Margot, Pfoertsch, Waldemar",
      title: "Small Scale Industries in Sierra Leone",
      journal:
        "Proceedings: Sierra Leone Symposium, Centre for West-African Studies, Birmingham",
      date: "1983",
      abstract:
        "Socio-economic research paper detailing growth prospects and structural barriers for small-scale industries in Sierra Leone.",
    },

    {
      id: "pfoertsch-1980-wasserkraft",
      type: "press",
      year: 1980,
      authors: "Waldemar Pförtsch, Ludwig Obermeyer",
      title:
        "Problematik kleiner Wasserkraftanlagen in Entwicklungsländern und die Möglichkeit des Technologie-Transfers",
      journal:
        "Bericht für das Bundesministerium für wirtschaftliche Zusammenarbeit, TU Berlin",
      date: "Dezember 1980",
      abstract:
        "Report evaluating technology transfer considerations for small-scale hydroelectric power installations in developing regions.",
    },

    {
      id: "pfoertsch-1979-fernwaerme",
      type: "press",
      year: 1979,
      authors: "Waldemar Pförtsch (Hrsg.)",
      title: "Bericht der Fernwärmekommision Band 1-11",
      journal: "Senator für Bauwesen Berlin",
      date: "Dezember 1979",
      abstract:
        "Multi-volume municipal research report examining urban district heating infrastructure planning for West Berlin.",
    },

    {
      id: "allesch-1979-forschung",
      type: "press",
      year: 1979,
      authors:
        "J. Allesch, C. Scheffen, K. Schmitz, H. Fiedler, G. Hartmann, W. Pförtsch",
      title:
        "Planung und Organisation von Forschung: Vergleichende Synopse von außeruniversitären Forschungseinrichtungen",
      journal: "Technische Universität Berlin",
      date: "Mai 1979",
      abstract:
        "Comparative synopsis examining structural organization and management practices across non-university research institutes.",
    },

    {
      id: "pfoertsch-1979-technologie-transfer",
      type: "press",
      year: 1979,
      authors: "Waldemar Pförtsch",
      title:
        "Angepaßte Technologien: Pilotstudie Technologie-Transfer",
      journal: "Technische Universität Berlin",
      date: "Mai 1979",
      abstract:
        "Pilot study analyzing appropriate technology transfer mechanisms for developing industrial economies.",
    },

    {
      id: "pfoertsch-1977-diplomarbeit",
      type: "press",
      year: 1977,
      authors: "Waldemar Pförtsch",
      title:
        "“Humanisierung der Arbeitswelt” Soziologische Aspekte teilautonomer Gruppenarbeit",
      journal: "Diplomarbeit, Freie Universität Berlin",
      date: "September 1977",
      abstract:
        "Master's thesis examining sociological dimensions and efficiency impacts of semi-autonomous work groups.",
    },
  ];

  // =========================================================
  // CATEGORY FILTERS
  // =========================================================
  const filters = [
    {
      id: "all",
      label: t("articles_all_publications"),
    },
    {
      id: "peer_reviewed",
      label: t("articles_peer_reviewed"),
    },
    {
      id: "press",
      label: t("articles_press_various"),
    },
  ];

  // =========================================================
  // UNIQUE YEARS
  // =========================================================
  const years = [
    ...new Set(articles.map((article) => article.year)),
  ].sort((a, b) => b - a);

  // =========================================================
  // SEARCH + FILTER LOGIC
  // =========================================================
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      filter === "all" || article.type === filter;

    const matchesYear =
      yearFilter === "all" ||
      article.year === Number(yearFilter);

    const search = searchTerm.toLowerCase().trim();

    const searchableText = [
      article.title,
      article.authors,
      article.journal,
      article.date,
      article.year,
      article.volume,
      article.status,
      article.editor,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      search === "" || searchableText.includes(search);

    return matchesCategory && matchesYear && matchesSearch;
  });

  // =========================================================
  // CLEAR FILTERS
  // =========================================================
  const clearFilters = () => {
    setFilter("all");
    setYearFilter("all");
    setSearchTerm("");
  };

  // =========================================================
  // ARTICLE TYPE LABEL
  // =========================================================
  const getArticleTypeLabel = (type) => {
    if (type === "peer_reviewed") {
      return t("articles_peer_reviewed_label");
    }

    if (type === "press") {
      return t("articles_press_label");
    }

    return t("articles_publication");
  };

  return (
    <div className="articles-page">

      <SEO
        title="Journal Articles"
        description="Browse the complete library of peer-reviewed journal articles by Prof. Waldemar Pfoertsch on B2B branding, digital marketing, and Human-to-Human strategy."
        path="/articles"
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="articles-hero">
        <div className="articles-hero-content">
          <span className="articles-eyebrow">
            {t("articles_eyebrow")}
          </span>

          <h1>{t("articles_headline")}</h1>

          <p>{t("articles_intro")}</p>
        </div>
      </section>

      {/* =====================================================
          ARTICLES SECTION
      ===================================================== */}
      <section className="articles-section">
        <div className="articles-header">
          <div>
            <span className="section-label">
              {t("articles_archive")}
            </span>

            <h2>{t("articles_publications")}</h2>
          </div>

         
        </div>

        {/* ===================================================
            CATEGORY FILTERS
        =================================================== */}
        <div className="article-filters">
          {filters.map((item) => (
            <button
              key={item.id}
              className={`filter-btn ${
                filter === item.id ? "active" : ""
              }`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ===================================================
            SEARCH + YEAR CONTROLS
        =================================================== */}
        <div className="articles-controls">
          <div className="articles-search">

            <input
              type="text"
              placeholder={t("articles_search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
                aria-label={t("articles_clear_search")}
              >
                ×
              </button>
            )}
          </div>

          <div className="year-filter">
            <label htmlFor="yearFilter">
              {t("articles_year")}
            </label>

            <select
              id="yearFilter"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <option value="all">
                {t("pub_all_years")}
              </option>

              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ===================================================
            ACTIVE FILTERS BAR
        =================================================== */}
        {(searchTerm ||
          yearFilter !== "all" ||
          filter !== "all") && (
          <div className="active-filters">
            <div className="active-filter-text">
              {t("articles_showing")}{" "}
              <strong>{filteredArticles.length}</strong>{" "}
              {filteredArticles.length === 1
                ? t("articles_publication_single")
                : t("articles_publications_plural")}
            </div>

            <button
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              {t("articles_clear_filters")}
            </button>
          </div>
        )}

        {/* ===================================================
            ARTICLE CARDS LIST
        =================================================== */}
        {filteredArticles.length > 0 ? (
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <article
                className="article-card"
                key={article.id}
              >
                <div className="article-card-header">
                  <span className="type-badge">
                    {getArticleTypeLabel(article.type)}
                  </span>

                  <span className="article-year">
                    {article.year}
                  </span>
                </div>

                <h3 className="article-title">
                  {article.title}
                </h3>

                <p className="article-authors">
                  {article.authors}
                </p>

                <div className="article-meta">
                  {article.journal && (
                    <span className="article-journal">
                      <em>{article.journal}</em>
                    </span>
                  )}

                  {article.editor && (
                    <span className="article-editor">
                      {t("articles_in")} {article.editor}
                    </span>
                  )}

                  {article.volume && (
                    <span className="article-volume">
                      {t("articles_volume")} {article.volume}
                    </span>
                  )}

                  {article.issue && (
                    <span className="article-issue">
                      {t("articles_issue")} {article.issue}
                    </span>
                  )}

                  {article.pages && (
                    <span className="article-pages">
                      {t("articles_pages")} {article.pages}
                    </span>
                  )}

                  {article.status && (
                    <span className="article-status-badge">
                      ({article.status})
                    </span>
                  )}

                  {article.date && (
                    <span className="article-date">
                      {article.date}
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="article-actions">
                  <button
                    className="article-btn view-btn"
                    onClick={() =>
                      setSelectedArticle(article)
                    }
                  >
                    👁 {t("articles_view_details")}
                  </button>

                  {article.doi && (
                    <a
                      href={article.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-link doi-link"
                    >
                      DOI ↗
                    </a>
                  )}

                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-link external-link"
                    >
                      {t("articles_read_online")} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>{t("articles_no_results")}</p>

            <button
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              {t("articles_reset_search")}
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          SPECIFIC ARTICLE MODAL / DETAIL VIEW
      ===================================================== */}
      {selectedArticle && (
        <div
          className="article-modal-backdrop"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="article-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedArticle(null)}
              aria-label={t("articles_close")}
            >
              ×
            </button>

            <span className="type-badge">
              {getArticleTypeLabel(selectedArticle.type)}
            </span>

            <h2 className="modal-title">
              {selectedArticle.title}
            </h2>

            <p className="modal-authors">
              <strong>
                {t("articles_authors")}:
              </strong>{" "}
              {selectedArticle.authors}
            </p>

            <div className="modal-details">
              {selectedArticle.journal && (
                <p>
                  <strong>
                    {t("articles_journal_publisher")}:
                  </strong>{" "}
                  {selectedArticle.journal}
                </p>
              )}

              {selectedArticle.editor && (
                <p>
                  <strong>
                    {t("articles_editors")}:
                  </strong>{" "}
                  {selectedArticle.editor}
                </p>
              )}

              {selectedArticle.year && (
                <p>
                  <strong>
                    {t("articles_year_label")}:
                  </strong>{" "}
                  {selectedArticle.year}
                </p>
              )}

              {selectedArticle.date && (
                <p>
                  <strong>
                    {t("articles_publication_date")}:
                  </strong>{" "}
                  {selectedArticle.date}
                </p>
              )}

              {selectedArticle.volume && (
                <p>
                  <strong>
                    {t("articles_volume")}:
                  </strong>{" "}
                  {selectedArticle.volume}
                </p>
              )}

              {selectedArticle.issue && (
                <p>
                  <strong>
                    {t("articles_issue")}:
                  </strong>{" "}
                  {selectedArticle.issue}
                </p>
              )}

              {selectedArticle.pages && (
                <p>
                  <strong>
                    {t("articles_pages")}:
                  </strong>{" "}
                  {selectedArticle.pages}
                </p>
              )}

              {selectedArticle.issn && (
                <p>
                  <strong>
                    {t("articles_issn")}:
                  </strong>{" "}
                  {selectedArticle.issn}
                </p>
              )}

              {selectedArticle.status && (
                <p>
                  <strong>
                    {t("articles_status")}:
                  </strong>{" "}
                  {selectedArticle.status}
                </p>
              )}
            </div>

            {selectedArticle.abstract && (
              <div className="modal-abstract">
                <h3>
                  {t("articles_overview_abstract")}
                </h3>

                <p>{selectedArticle.abstract}</p>
              </div>
            )}

            <div className="modal-actions">
              {selectedArticle.link && (
                <a
                  href={selectedArticle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn primary-btn"
                >
                  {t("articles_read_online")} ↗
                </a>
              )}

              {selectedArticle.doi && (
                <a
                  href={selectedArticle.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn secondary-btn"
                >
                  {t("articles_open_doi")} ↗
                </a>
              )}

              <button
                className="modal-btn close-action-btn"
                onClick={() => setSelectedArticle(null)}
              >
                {t("articles_close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;