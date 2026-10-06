import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./CaseStudies.css";

const caseStudies = [
  {
    id: 1,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "Twyla Technology – Pioneering Digital Transformation in the Middle East",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 2,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "Qatari German Medical Devices (QGMD) – Building an Unshakeable Reputation in a Volatile World",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 3,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "Industries Qatar – Building a Diversified Industrial Powerhouse in a Hydrocarbon-Dependent Economy",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 4,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "BigTrader – Navigating the Challenges of a B2B Startup in Qatar's Compact Market",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 5,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "Sama 2.0 – Qatar Airways Soars with an AI-Powered Digital Crew",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 6,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "The Al Jazeera Brand – Building a Global News Powerhouse by Challenging the Narrative",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 7,
    year: 2025,
    authors: "Waldemar Pfoertsch",
    title:
      "The QatarEnergy Rebrand – A Strategic Pivot Navigating Classic Branding Pitfalls",
    publication:
      "In Kotler, Philip; Pfoertsch, Waldemar; Al-Sulati, Khalid, B2B Brand Management, Performance Branding Case Studies Collection Qatar Edition, Nexus Global Marketing, Toronto. November 2025.",
  },
  {
    id: 8,
    year: 2026,
    authors: "Fabio Ancarani, Waldemar Pfoertsch",
    title:
      "Ink and Innovation: How Moleskine Weaves Human Connection into the Digital Age",
    publication: "Pearson Marketing Management 2026, forthcoming.",
  },
  {
    id: 9,
    year: 2025,
    authors: "Waldemar Pfoertsch, Kejsi Sulaj",
    title:
      "ASKO: Cooking with Steam Becomes a Personal Experience. How Do Social Media and Influencer Marketing Improve Co-Creation?",
    publication: "Sage Business Cases, 2025.",
    link:
      "https://sk.sagepub.com/cases/asko-cooking-with-steam-becomes-a-personal-experience",
    linkLabel: "View Sage Business Case",
  },
  {
    id: 10,
    year: 2023,
    authors: "Waldemar Pfoertsch",
    title: "PATAGONIA – Ein menschenzentrierter Ansatz für das Marketing",
    publication:
      '16. Auflage "Marketing Management", Phil Kotler, Kevin Keller und Marc Opresnik, 2023.',
  },
  {
    id: 11,
    year: 2023,
    authors: "Waldemar Pfoertsch",
    title:
      "Hermès führt neue vegane Produkte ein – eine Anwendung des H2H-Marketings?",
    publication:
      '16. Auflage "Marketing Management", Phil Kotler, Kevin Keller und Marc Opresnik, 2023.',
  },
  {
    id: 12,
    year: 2023,
    authors: "Posada, D., Pfoertsch, W.",
    title:
      "Whole Foods Market—Combining Multiple Elements of H2H Marketing",
    publication:
      "In: Kotler, P., Pfoertsch, W., Sponholz, U., Haas, M. (eds) H2H Marketing. Springer Business Cases. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-031-22393-8_2",
    linkLabel: "View DOI",
  },
  {
    id: 13,
    year: 2023,
    authors: "Gupta, S., Pfoertsch, W.",
    title:
      "Case Study: The Good Kitchen (Det Gode Køkken)—Applying Design Thinking and Service-Dominant Logic",
    publication:
      "In: Kotler, P., Pfoertsch, W., Sponholz, U., Haas, M. (eds) H2H Marketing. Springer Business Cases. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-031-22393-8_3",
    linkLabel: "View DOI",
  },
  {
    id: 14,
    year: 2023,
    authors: "Pfoertsch, W.",
    title:
      "Case Study: New Challenges at elobau—Can Purpose Orientation and Sustainability Create New Strategic Options?",
    publication:
      "In: Kotler, P., Pfoertsch, W., Sponholz, U., Haas, M. (eds) H2H Marketing. Springer Business Cases. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-031-22393-8_5",
    linkLabel: "View DOI",
  },
  {
    id: 15,
    year: 2023,
    authors: "Haas, M., Pfoertsch, W.",
    title:
      "Case Study: Liva Branding for Success—Can Ingredient Branding Change the Dynamics in the Indian Textile Value Chain?",
    publication:
      "In: Kotler, P., Pfoertsch, W., Sponholz, U., Haas, M. (eds) H2H Marketing. Springer Business Cases. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-031-22393-8_7",
    linkLabel: "View DOI",
  },
  {
    id: 16,
    year: 2023,
    authors: "Lei, A., Pfoertsch, W.",
    title:
      "Case Study: H2H Marketing—In the Heart of Siemens’ Success",
    publication:
      "In: Kotler, P., Pfoertsch, W., Sponholz, U., Haas, M. (eds) H2H Marketing. Springer Business Cases. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-031-22393-8_9",
    linkLabel: "View DOI",
  },
  {
    id: 17,
    year: 2023,
    authors: "Schatz, C., Pfoertsch, W.",
    title:
      "Case Study: Patagonia—A Human-Centered Approach to Marketing",
    publication:
      "In: Kotler, P., Pfoertsch, W., Sponholz, U., Haas, M. (eds) H2H Marketing. Springer Business Cases. Springer, Cham.",
    link: "https://doi.org/10.1007/978-3-031-22393-8_12",
    linkLabel: "View DOI",
  },
  {
    id: 18,
    year: 2023,
    authors: "Pfoertsch, W.",
    title:
      "Hermès führt neue vegane Produkte ein – eine Anwendung des H2H Marketings",
    publication:
      "In: Kotler, P., Keller, K., Chernev, A., Opresnik, M. Marketing-Management Konzepte-Instrumente-Unternehmensfallstudien, 16 Edition, Pearson München.",
  },
  {
    id: 19,
    year: 2023,
    authors: "Pfoertsch, W.",
    title:
      "Patagonia – ein menschenzentrierter Ansatz für das Marketing",
    publication:
      "In: Kotler, P., Keller, K., Chernev, A., Opresnik, M. Marketing-Management Konzepte-Instrumente-Unternehmensfallstudien, 16 Edition, Pearson München.",
    link: "https://www.instagram.com/hermes/?hl=en",
    linkLabel: "View Publication",
  },
  {
    id: 20,
    year: 2024,
    authors: "Sulaj, K., Pfoertsch, W.",
    title:
      "Case Study: Lajthiza Water Company: Development in Albania’s Domestic Market and Expansion to International Markets",
    publication: "Sage Business Cases, 2024.",
    link: "https://doi.org/10.4135/9781071938508",
    linkLabel: "View DOI",
  },
];

function CaseStudies() {
  const { t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const years = [
    ...new Set(caseStudies.map((study) => study.year)),
  ].sort((a, b) => b - a);

  const filteredStudies = caseStudies.filter((study) => {
    const matchesYear =
      selectedYear === "all" ||
      study.year.toString() === selectedYear;

    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      !search ||
      study.title.toLowerCase().includes(search) ||
      study.authors.toLowerCase().includes(search) ||
      study.publication.toLowerCase().includes(search);

    return matchesYear && matchesSearch;
  });

  return (
    <div className="case-studies-page">

      <SEO
        title="Case Studies"
        description="Real-world B2B brand management case studies by Prof. Waldemar Pfoertsch, from digital transformation to reputation building across global industries."
        path="/case-studies"
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-studies-hero">
        <div className="case-studies-hero-content">

          <span className="case-studies-eyebrow">
            {t("case_eyebrow")}
          </span>

          <h1>
            {t("case_headline")}
          </h1>

          <p>
            {t("case_intro")}
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="case-studies-section">

        <div className="case-studies-header">

          <div>

            <span className="section-label">
              {t("case_section_label")}
            </span>

            <h2>
              {t("case_section_title")}
            </h2>

          </div>

          <div className="case-study-count">
            {filteredStudies.length}{" "}
            {filteredStudies.length === 1
              ? t("case_single")
              : t("case_multiple")}
          </div>

        </div>


        {/* =================================================
            CONTROLS
        ================================================= */}

        <div className="case-studies-controls">

          <div className="case-studies-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder={t("case_search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>


          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="case-study-year-filter"
          >

            <option value="all">
              {t("case_all_years")}
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


        {/* =================================================
            ACTIVE FILTER
        ================================================= */}

        {(searchTerm || selectedYear !== "all") && (

          <div className="case-study-active-filter">

            <span>
              {t("case_showing")}{" "}
              {filteredStudies.length}{" "}
              {t("case_results")}
            </span>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedYear("all");
              }}
            >
              {t("case_clear_filters")} ×
            </button>

          </div>

        )}


        {/* =================================================
            GRID
        ================================================= */}

        {filteredStudies.length > 0 ? (

          <div className="case-studies-grid">

            {filteredStudies.map((study) => (

              <article
                className="case-study-card"
                key={study.id}
              >

                <div className="case-study-card-top">

                  <span className="case-study-badge">
                    {t("case_badge")}
                  </span>

                  <span className="case-study-year">
                    {study.year}
                  </span>

                </div>


                <h3>
                  {study.title}
                </h3>


                <div className="case-study-authors">
                  {study.authors}
                </div>


                <p className="case-study-publication">
                  {study.publication}
                </p>


                <div className="case-study-actions">

                  <button
                    className="case-study-details-btn"
                    onClick={() => setSelectedStudy(study)}
                  >
                    {t("case_view_details")}
                  </button>


                  {study.link && (

                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study-external-link"
                    >
                      {study.linkLabel || t("case_view_source")} ↗
                    </a>

                  )}

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* =================================================
             NO RESULTS
          ================================================= */

          <div className="case-study-no-results">

            <div className="no-results-icon">
              ⌕
            </div>

            <h3>
              {t("case_no_results")}
            </h3>

            <p>
              {t("case_no_results_hint")}
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedYear("all");
              }}
            >
              {t("case_clear_filters")}
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          MODAL
      ===================================================== */}

      {selectedStudy && (

        <div
          className="case-study-modal-backdrop"
          onClick={() => setSelectedStudy(null)}
        >

          <div
            className="case-study-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="case-study-modal-close"
              onClick={() => setSelectedStudy(null)}
              aria-label="Close"
            >
              ×
            </button>


            <span className="case-study-modal-label">
              {t("case_badge")} · {selectedStudy.year}
            </span>


            <h2>
              {selectedStudy.title}
            </h2>


            <div className="case-study-modal-authors">
              {selectedStudy.authors}
            </div>


            <div className="case-study-modal-divider"></div>


            <p>
              {selectedStudy.publication}
            </p>


            {selectedStudy.link && (

              <a
                href={selectedStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-modal-link"
              >
                {selectedStudy.linkLabel || t("case_view_source")} ↗
              </a>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default CaseStudies;