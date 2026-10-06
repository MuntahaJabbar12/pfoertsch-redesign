import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./Publications.css";

/* =========================================================
   B2B BRAND MANAGEMENT
========================================================= */

const B2B_LINK = "https://b2bbrandmanagement.com/#";

const B2B_EDITIONS = [
  "B2B Brand Management",
  "The B2B Brand Management- Morocco edition",
  "The B2B Brand Management- China edition",
  "The B2B Brand Management- India edition",
  "The B2B Brand Management- Jordan edition",
  "The B2B Brand Management- Caribbean edition",
  "The B2B Brand Management- Bangladesh edition",
  "The B2B Brand Management- Switzerland edition",
  "The B2B Brand Management- Sri Lanka edition",
  "The B2B Brand Management- Portugal edition",
  "The B2B Brand Management- Phillipines edition",
  "The B2B Brand Management- Myanmar edition",
  "The B2B Brand Management- Egypt edition",
  "The B2B Brand Management- COUNTER NEXUS edition",
  "The B2B Brand Management- Brazil edition",
  "The B2B Brand Management- Tunisia edition",
  "The B2B Brand Management- Qatar edition",
];

function Publications() {
  const { t } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  /* =========================================================
     PUBLICATIONS
  ========================================================= */

  const publications = [
    // =======================================================
    // BOOKS PUBLISHED
    // =======================================================

    {
      type: "published",
      year: 2024,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Ureta, Ivan; Ancarani, Fabio",
      title:
        "Humanism in Marketing: Responsible Leadership and the Human-to-Human Approach",
      publisher: "Palgrave",
      date: "November 2024",
      amazon:
        "https://www.amazon.com/dp/B0CW1JWBVP?lv=shuf&channelId=500&plpRedirect=mhFallback",
    },

    {
      type: "published",
      year: 2024,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Sponholz, Uwe; Sulaj, Kejsi",
      title:
        "An Instructor's Manual to H2H Marketing Case Studies: Teach Human-to-Human Marketing Effectively",
      publisher: "Springer",
      date: "January 2024",
      pages: "181",
      amazon:
        "https://www.amazon.com/Instructors-Manual-Marketing-Studies-Human-ebook/dp/B0CPKVH3JX",
    },

    {
      type: "published",
      year: 2023,
      authors: "Kotler, Philip; Pfoertsch, Waldemar",
      title: "H2H Marketing: New Case Studies on Human-to-Human Marketing",
      publisher: "Springer",
      date: "Forthcoming 2023",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Human-Human-Springer-ebook/dp/B0BY67NN3J",
    },

    {
      type: "published",
      year: 2023,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Sponholz, Uwe; Haas, Max",
      title: "H2H Marketing: Case Studies on Human-to-Human Marketing",
      publisher: "Springer",
      date: "June 2023",
      pages: "213",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Human-Human-Springer-ebook/dp/B0BY67NN3J",
    },

    {
      type: "published",
      year: 2022,
      authors: "Kotler, Philip; Pfoertsch, Waldemar; Sponholz, Uwe",
      title:
        "H2H-Marketing – von Menschen für Menschen: Marketing mit mehr Verantwortung und Nachhaltigkeit – Konzeption und Umsetzung",
      publisher: "Gabler",
      date: "June 2022",
      pages: "262",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2022,
      authors:
        "Waldemar A. Pförtsch; Adam-Alexander Manowicz; Michael W. Preikschas",
      title: "Business-to-Business Marketing",
      publisher: "Kiehl",
      date: "2022",
      pages: "274",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2021,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing: The Genesis of Human-to-Human Marketing",
      publisher: "Springer",
      date: "January 2021",
      pages: "267",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2019,
      authors: "Pfoertsch; Sponholz",
      title: "Das neue Marketing-Mindset",
      publisher: "Gabler-Springer",
      date: "July 2019",
      pages: "586",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2018,
      authors: "Pfoertsch (Ed.)",
      title: "Working Abroad – Country Metaphors",
      publisher: "WAP Books",
      date: "February 2018",
      pages: "108",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Working Abroad – Country Perspective",
      publisher: "WAP Books",
      date: "November 2017",
      pages: "241",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Aspects of Digital B2B Marketing",
      publisher: "WAP Books",
      date: "October 2017",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Working Abroad – Case Study Collection",
      publisher: "WAP Books",
      date: "October 2017",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch",
      title: "China Time Honored Brands",
      publisher: "WAP Books",
      date: "September 2017",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Basics in Finance for International Marketers",
      publisher: "WAP Books",
      date: "September 2017",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title:
        "Working Abroad: How to understand foreign markets and do business around the globe",
      publisher: "WAP Books",
      date: "July 2017",
    },

    {
      type: "published",
      year: 2015,
      authors: "Kotler; Dingena; Pfoertsch",
      title:
        "Transformational Sales: Making a Difference with Strategic Customers",
      publisher: "Springer",
      date: "September 2015",
    },

    {
      type: "published",
      year: 2015,
      authors: "Pfoertsch; Schaefer",
      title: "B2B Brand Portfolio Strategy",
      publisher: "Saarbruecken",
      date: "July 2015",
    },

    {
      type: "published",
      year: 2015,
      authors: "Pfoertsch (Ed.); Johnson; Kohrs",
      title: "UPBRANDING",
      publisher: "Kindle Edition, Luxembourg",
      date: "June 2015",
    },

    {
      type: "published",
      year: 2013,
      authors: "Waldemar Pförtsch; Peter Godefroid",
      title: "Business-to-Business-Marketing",
      publisher: "Herne",
      date: "2013",
      pages: "460",
      edition: "5th revised edition",
    },

    {
      type: "published",
      year: 2011,
      authors:
        "Katherine Xin; Arthur Yeung; Waldemar Pfoertsch; Shengjun Liu",
      title: "The Globalization of Chinese Companies",
      publisher: "Wiley, Singapore",
      date: "March 2011",
      pages: "224",
    },

    {
      type: "published",
      year: 2010,
      authors: "Pfoertsch; Giglierano; Vitale",
      title: "Business to Business Marketing – Analysis and Practice",
      publisher: "Prentice Hall",
      date: "2010",
      pages: "450",
    },

    {
      type: "published",
      year: 2010,
      authors: "Kotler; Pfoertsch",
      title: "Ingredient Branding: Making the Invisible Visible",
      publisher: "Springer",
      date: "2010",
      pages: "408",
    },

    {
      type: "published",
      year: 2009,
      authors: "Waldemar Pfoertsch; Ines Michi",
      title: "The Big Book of Real Business",
      publisher: "Lulu",
      date: "2009",
      pages: "140",
    },

    {
      type: "published",
      year: 2009,
      authors: "Waldemar Pförtsch; Peter Godefroid",
      title: "Business-to-Business-Marketing",
      publisher: "Herne",
      date: "2009",
      pages: "430",
      edition: "4th edition",
    },

    {
      type: "published",
      year: 2007,
      authors:
        "Waldemar A. Pförtsch; Rebekka Müller; Maddalena Sassanelli; Jeannine Klar",
      title: "Perspektiven des IT-Weiterbildungssystems in Deutschland",
      publisher: "BIBB",
      date: "2007",
      pages: "211",
    },

    {
      type: "published",
      year: 2006,
      authors: "Koziol; Pfoertsch; Heil",
      title: "Social Marketing",
      publisher: "Schäffer-Poeschel",
      date: "2006",
      pages: "172",
    },

    {
      type: "published",
      year: 2006,
      authors: "Pfoertsch; Mueller",
      title:
        "Marke in der Marke Macht und Bedeutung des Ingredient Branding",
      publisher: "Springer",
      date: "2006",
      pages: "204",
    },

    {
      type: "published",
      year: 2005,
      authors: "Pfoertsch; Schmid",
      title: "B2B Markenmanagement",
      publisher: "Vahlen",
      date: "2005",
      pages: "605",
    },

    {
      type: "published",
      year: 2004,
      authors: "Pfoertsch (Hrsg.)",
      title: "Symposium WOManagement Konferenzdokumentation",
      publisher: "Hochschule Pforzheim",
      date: "April 2004",
      pages: "455",
    },

    {
      type: "published",
      year: 2001,
      authors: "Hering; Pfoertsch; Wordelmann",
      title: "Internationalisierung des Mittelstandes",
      publisher: "Bertelsmann",
      date: "2001",
      pages: "135",
    },

    {
      type: "published",
      year: 2000,
      authors: "Pfoertsch",
      title: "Mit Strategie ins Internet",
      publisher: "BW-Verlag",
      date: "2000",
      pages: "145",
    },

    {
      type: "published",
      year: 2000,
      authors: "Pfoertsch (Ed.)",
      title: "Living Web",
      publisher: "Verlag Moderne Industrie",
      date: "1999/2000",
      pages: "344",
    },

    {
      type: "published",
      year: 1999,
      authors: "Pfoertsch (Ed.)",
      title: "Faszination Japan",
      publisher: "G.A. Ulmer Verlag",
      date: "1999",
    },

    {
      type: "published",
      year: 1998,
      authors: "Oetinger; Pfoertsch (Ed.)",
      title: "Strategien für die neue Weltwirtschaft",
      publisher: "Carl Hanser Verlag",
      date: "1998",
    },

    {
      type: "published",
      year: 1992,
      authors: "Pfoertsch",
      title: "Tends in Globalization and Relocation Requirements",
      publisher: "Arthur Andersen, Stuttgart",
      date: "June 1992",
    },

    {
      type: "published",
      year: 1981,
      authors: "Pfoertsch",
      title: "Universitärer Technologie-Transfer",
      publisher: "Verlag der Olivenbaum, Berlin",
      date: "1981",
      edition: "Dissertation",
    },

    {
      type: "published",
      year: 1978,
      authors: "Pfoertsch",
      title:
        "Angepasste Technologien: Modular manufacturing systems for industrial flexibility",
      publisher: "Hannover Messe Exhibition Presentation",
      date: "1978",
      edition: "Exhibition presentation / brochure",
    },

    {
      type: "published",
      year: 1978,
      authors: "Pfoertsch",
      title:
        "Technical Report on Integrated Planning and Transport Systems",
      publisher: "TU Berlin – IPAT",
      date: "1978",
      edition: "IPAT Technical Report",
    },

    // =======================================================
    // CHAPTERS IN BOOKS
    // =======================================================

    {
      type: "chapters",
      year: 2025,
      authors: "Pfoertsch",
      title: "Vorwort",
      publisher: "Business Model Flowchart",
      date: "2025",
    },

    {
      type: "chapters",
      year: 2024,
      authors: "Theodore Panayotou; Waldemar Pfoertsch",
      title: "Implications of Humanistic Marketing",
      publisher: "Palgrave",
      date: "October 25, 2024",
      doi: "https://doi.org/10.1007/978-3-031-67155-5_9",
    },

    {
      type: "chapters",
      year: 2024,
      authors:
        "Philip Kotler; Waldemar Pfoertsch; Fabio Ancarani; Ivan Ureta",
      title: "Introduction",
      publisher: "Palgrave",
      date: "October 25, 2024",
      doi: "https://doi.org/10.1007/978-3-031-67155-5_1",
    },

    {
      type: "chapters",
      year: 2024,
      authors: "Waldemar Pfoertsch",
      title: "The Genesis of Human-to-Human Marketing",
      publisher: "Palgrave",
      date: "October 25, 2024",
      doi: "https://doi.org/10.1007/978-3-031-67155-5_6",
    },

    {
      type: "chapters",
      year: 2023,
      authors: "Kotler; Pfoertsch; Sponholz; Haas",
      title: "The New Paradigm: H2H Marketing",
      publisher: "Springer",
      date: "2023",
      doi: "https://doi.org/10.1007/978-3-031-22393-8_1",
    },

    {
      type: "chapters",
      year: 2023,
      authors: "H2H Marketing",
      title: "H2H Mindset in H2H Marketing",
      publisher: "Springer",
      date: "2023",
      doi: "https://doi.org/10.1007/978-3-031-22393-8_4",
    },

    {
      type: "chapters",
      year: 2023,
      authors: "H2H Marketing",
      title: "H2H Brand Management and Trust",
      publisher: "Springer",
      date: "2023",
      doi: "https://doi.org/10.1007/978-3-031-22393-8_6",
    },

    {
      type: "chapters",
      year: 2023,
      authors: "H2H Marketing",
      title: "Rethinking Operative Marketing: The H2H Process",
      publisher: "Springer",
      date: "2023",
      doi: "https://doi.org/10.1007/978-3-031-22393-8_8",
    },

    {
      type: "chapters",
      year: 2023,
      authors: "H2H Marketing",
      title:
        "Establishing Resonance Between Companies, People, and the Environment",
      publisher: "Springer",
      date: "2023",
      doi: "https://doi.org/10.1007/978-3-031-22393-8_11",
    },

    {
      type: "chapters",
      year: 2021,
      authors: "Waldemar Pfoertsch",
      title: "The Genesis of H2H Marketing",
      publisher: "Kotler Impact – Big Bang Marketing",
      date: "2021",
    },

    {
      type: "chapters",
      year: 2018,
      authors: "Martin Gannon; Waldemar Pfoertsch",
      title: "German Symphony Metaphor",
      publisher: "SAGE",
      date: "2018",
    },

    {
      type: "chapters",
      year: 2013,
      authors: "Waldemar Pfoertsch; Yipeng Liu",
      title: "Chinese Jobs in Germany",
      publisher: "Hochschule Pforzheim",
      date: "2013",
    },

    {
      type: "chapters",
      year: 2009,
      authors: "Waldemar Pfoertsch; Christian Linder",
      title: "Erfolgsmessung von Ingredient Branding",
      publisher: "2009",
      date: "2009",
    },

    {
      type: "chapters",
      year: 2009,
      authors: "Waldemar Pförtsch",
      title: "Ingredient Branding im chinesischen Automobilmarkt",
      publisher: "2009",
      date: "2009",
    },

    {
      type: "chapters",
      year: 2008,
      authors: "Pfoertsch; Linder; Chandler",
      title:
        "Measuring the value of Ingredient Brand equity at multiple stages in the supply chain",
      publisher: "2008",
      date: "2008",
      pages: "571–594",
    },

    {
      type: "chapters",
      year: 2007,
      authors: "Konrad Zerr; Waldemar A. Pförtsch; Steffen Heil",
      title: "Die Zukunft des Marketings",
      publisher: "2007",
      date: "2007",
    },

    {
      type: "chapters",
      year: 2002,
      authors: "Waldemar Pförtsch",
      title:
        "E-LEARNING – Die Revolution des Lernens gewinnbringend einsetzen",
      publisher: "2002",
      date: "2002",
    },

    // =======================================================
    // TRANSLATED BOOKS
    // =======================================================

    {
      type: "translated",
      year: 2024,
      authors: "Kotler; Pfoertsch; Sponholz; Bendento",
      title: "H2H Marketing",
      publisher: "Brazilian Portuguese Edition",
      date: "2024",
      language: "Portuguese",
    },

    {
      type: "translated",
      year: 2024,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Spanish Edition",
      date: "2024",
      language: "Spanish",
    },

    {
      type: "translated",
      year: 2023,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Klidarithmos",
      date: "2023",
      language: "Greek",
    },

    {
      type: "translated",
      year: 2023,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Hanoi Publishing",
      date: "2023",
      language: "Vietnamese",
    },

    {
      type: "translated",
      year: 2023,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H 营销 开创人本营销新纪元",
      publisher: "Shanghai Century Publishing",
      date: "December 12, 2023",
      language: "Chinese",
    },

    {
      type: "translated",
      year: 2023,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Persian Edition",
      date: "2023",
      language: "Persian",
    },

    {
      type: "translated",
      year: 2022,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing – von Menschen für Menschen",
      publisher: "Gabler",
      date: "2022",
      language: "German",
    },

    {
      type: "translated",
      year: 2022,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Piccin Nuova Libaria S.P.A.",
      date: "2022",
      language: "Italian",
    },

    {
      type: "translated",
      year: 2021,
      authors: "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "白桃書房, Tokyo",
      date: "2021",
      language: "Japanese",
    },

    {
      type: "translated",
      year: 2014,
      authors: "Kotler; Pfoertsch",
      title: "Ingredient Branding",
      publisher: "白桃書房, Tokyo",
      date: "2014",
      pages: "384",
      language: "Japanese",
    },

    {
      type: "translated",
      year: 2013,
      authors: "Kotler; Pfoertsch",
      title: "Ingredient Branding",
      publisher: "Tecniche nuove, Milano",
      date: "2013",
      pages: "355",
      language: "Italian",
    },

    {
      type: "translated",
      year: 2010,
      authors: "Kotler; Pfoertsch",
      title: "Ingredient Branding",
      publisher: "Fudan University Press, Shanghai",
      date: "2010",
      pages: "355",
      language: "Chinese",
    },
  ];

  /* =========================================================
     FILTERS
  ========================================================= */

  const filters = [
    {
      id: "all",
      label: t("pub_filter_all"),
    },
    {
      id: "published",
      label: t("pub_filter_books"),
    },
    {
      id: "chapters",
      label: t("pub_filter_chapters"),
    },
    {
      id: "translated",
      label:
        languageLabel("Translated Books"),
    },
  ];

  function languageLabel(englishText) {
    if (englishText === "Translated Books") {
      return t("pub_filter_translated") || "Translated Books";
    }

    return englishText;
  }

  /* =========================================================
     YEARS
  ========================================================= */

  const years = [
    ...new Set(
      publications.map(
        (publication) => publication.year
      )
    ),
  ].sort((a, b) => b - a);

  /* =========================================================
     SEARCH
  ========================================================= */

  const search = searchTerm
    .toLowerCase()
    .trim();

  const filteredPublications =
    publications.filter((publication) => {

      const matchesCategory =
        filter === "all" ||
        publication.type === filter;

      const matchesYear =
        yearFilter === "all" ||
        publication.year === Number(yearFilter);

      const matchesSearch =
        search === "" ||
        publication.title
          ?.toLowerCase()
          .includes(search) ||
        publication.authors
          ?.toLowerCase()
          .includes(search) ||
        publication.publisher
          ?.toLowerCase()
          .includes(search) ||
        publication.date
          ?.toLowerCase()
          .includes(search) ||
        publication.language
          ?.toLowerCase()
          .includes(search) ||
        publication.year
          ?.toString()
          .includes(search);

      return (
        matchesCategory &&
        matchesYear &&
        matchesSearch
      );
    });

  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {
    setFilter("all");
    setYearFilter("all");
    setSearchTerm("");
  };

  /* =========================================================
     PUBLICATION TYPE
  ========================================================= */

  const getPublicationType = (type) => {

    if (type === "published") {
      return (
        t("pub_type_book") ||
        "BOOK"
      );
    }

    if (type === "chapters") {
      return (
        t("pub_type_chapter") ||
        "BOOK CHAPTER"
      );
    }

    if (type === "translated") {
      return (
        t("pub_type_translation") ||
        "TRANSLATION"
      );
    }

    return "PUBLICATION";
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div className="publications-page">

      <SEO
        title="Publications"
        description="A complete, always-current library of books, chapters, journal articles, and conference papers by Prof. Waldemar Pfoertsch, spanning B2B branding and Human-to-Human marketing."
        path="/publications"
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="publications-hero">

        <div className="publications-hero-content">

          <span className="publications-eyebrow">
            {t("pub_eyebrow")}
          </span>

          <h1>
            {t("pub_headline")}
          </h1>

          <p>
            {t("pub_intro")}
          </p>

        </div>

      </section>


      {/* =====================================================
          B2B BRAND MANAGEMENT
      ===================================================== */}

      <section className="b2b-publications-section">

        <div className="b2b-publications-header">

          <span className="section-label">
            B2B BRAND MANAGEMENT
          </span>

          <h2>
            B2B Brand Management Editions
          </h2>

          <p>
            Explore the B2B Brand Management
            collection and its international
            editions.
          </p>

        </div>


        <div className="b2b-publications-grid">

          {B2B_EDITIONS.map(
            (edition, index) => (

              <a
                key={edition}
                href={B2B_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="b2b-publication-card"
              >

                <div className="b2b-publication-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {edition}
                </h3>

                <span className="b2b-publication-link">
                  Visit B2B Brand Management →
                </span>

              </a>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          LIBRARY
      ===================================================== */}

      <section className="publications-section">

        <div className="publications-header">

          <div>

            <span className="section-label">
              {t("pub_full_library")}
            </span>

            <h2>
              {t("pub_browse_all")}
            </h2>

          </div>


      

        </div>


        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="publication-filters">

          {filters.map((item) => (

            <button
              key={item.id}
              className={
                `publication-filter-btn ${
                  filter === item.id
                    ? "active"
                    : ""
                }`
              }
              onClick={() =>
                setFilter(item.id)
              }
            >
              {item.label}
            </button>

          ))}

        </div>


        {/* =================================================
            SEARCH + YEAR
        ================================================= */}

        <div className="publications-controls">

          <div className="publications-search">

       
            <input
              type="text"
              placeholder={
                t("pub_search_placeholder")
              }
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            {searchTerm && (

              <button
                className="search-clear"
                onClick={() =>
                  setSearchTerm("")
                }
                aria-label={
                  t("pub_clear_search")
                }
              >
                ×
              </button>

            )}

          </div>


          <div className="publication-year-filter">

            <label htmlFor="publicationYear">
              {t("pub_year")}
            </label>

            <select
              id="publicationYear"
              value={yearFilter}
              onChange={(e) =>
                setYearFilter(e.target.value)
              }
            >

              <option value="all">
                {t("pub_all_years")}
              </option>

              {years.map((year) => (

                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>

              ))}

            </select>

          </div>

        </div>


        {/* =================================================
            ACTIVE FILTERS
        ================================================= */}

        {(searchTerm ||
          yearFilter !== "all" ||
          filter !== "all") && (

          <div className="active-publication-filters">

            <div>

              {filteredPublications.length}{" "}

              {filteredPublications.length === 1
                ? t("pub_single")
                : t("pub_multiple")}{" "}

              {searchTerm && (
                <>
                  {t("pub_for")}{" "}

                  <strong>
                    "{searchTerm}"
                  </strong>
                </>
              )}

            </div>


            <button
              onClick={clearFilters}
              className="clear-publication-filters"
            >
              {t("pub_clear_filters")}
            </button>

          </div>

        )}


        {/* =================================================
            PUBLICATIONS GRID
        ================================================= */}

        {filteredPublications.length > 0 ? (

          <div className="publications-grid">

            {filteredPublications.map(
              (publication, index) => (

                <article
                  className="publication-card"
                  key={
                    `${publication.title}-${publication.year}-${index}`
                  }
                >

                  {/* CARD TOP */}

                  <div className="publication-card-top">

                    <span className="publication-type">
                      {getPublicationType(
                        publication.type
                      )}
                    </span>

                    <span className="publication-year">
                      {publication.year}
                    </span>

                  </div>


                  {/* CARD BODY */}

                  <div className="publication-card-body">

                    {publication.language && (

                      <div className="publication-language">
                        {publication.language}
                      </div>

                    )}


                    <h3>
                      {publication.title}
                    </h3>


                    <p className="publication-authors">
                      {publication.authors}
                    </p>


                    <div className="publication-meta">

                      <div>

                        <span>
                          {t("pub_publisher")}
                        </span>

                        <strong>
                          {publication.publisher}
                        </strong>

                      </div>


                      <div>

                        <span>
                          {t("pub_date")}
                        </span>

                        <strong>
                          {publication.date}
                        </strong>

                      </div>


                      {publication.pages && (

                        <div>

                          <span>
                            {t("pub_pages")}
                          </span>

                          <strong>
                            {publication.pages}
                          </strong>

                        </div>

                      )}

                    </div>


                    {publication.edition && (

                      <div className="publication-edition">
                        {publication.edition}
                      </div>

                    )}


                    {/* ACTIONS */}

                    {(publication.buyLink ||
                      publication.amazon ||
                      publication.doi) && (

                      <div className="publication-actions">

                        {(publication.buyLink ||
                          publication.amazon) && (

                          <a
                            href={
                              publication.buyLink ||
                              publication.amazon
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-btn primary"
                          >
                            {t("pub_buy")}
                          </a>

                        )}


                        {publication.doi && (

                          <a
                            href={publication.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-btn secondary"
                          >
                            {t("pub_doi")}
                          </a>

                        )}

                      </div>

                    )}

                  </div>

                </article>

              )
            )}

          </div>

        ) : (

          /* =================================================
             NO RESULTS
          ================================================= */

          <div className="publications-empty">

            <div className="empty-icon">
              🔎
            </div>

            <h3>
              {t("pub_empty")}
            </h3>

            <p>
              {t("pub_empty_hint")}
            </p>

            <button
              onClick={clearFilters}
              className="clear-publication-filters"
            >
              {t("pub_show_all")}
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="publications-cta">

        <div className="publications-cta-inner">

          <span className="section-label">
            {t("pub_cta_eyebrow")}
          </span>

          <h2>
            {t("pub_cta_title")}
          </h2>

          <p>
            {t("pub_cta_text")}
          </p>

        </div>

      </section>

    </div>
  );
}

export default Publications;