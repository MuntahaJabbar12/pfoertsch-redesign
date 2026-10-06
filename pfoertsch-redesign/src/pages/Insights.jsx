// Insights.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { insights } from "../data/insights";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./Insights.css";

/* -------------------------------------------------
   useReveal — fades/slides a section in once it
   scrolls into view.
------------------------------------------------- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const FILTERS = [
  { key: "all", labelKey: "ins_filter_all" },
  { key: "podcast", labelKey: "ins_filter_podcasts" },
  { key: "interview", labelKey: "interviews" },
];

function Insights() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [gridRef, gridVisible] = useReveal(0.05);

  const featured = useMemo(
    () => insights.find((i) => i.featured) || insights[0],
    []
  );

  const filtered = useMemo(
    () => insights.filter((i) => filter === "all" || i.type === filter),
    [filter]
  );

  return (
    <div className="insights-page">

      <SEO
        title="Insights"
        description="A curated collection of interviews, articles, and conversations featuring Prof. Waldemar Pfoertsch, from the origins of B2B marketing to where brand strategy is headed next."
        path="/insights"
      />


      {/* HERO */}

      <section className="insights-hero">

        <p className="eyebrow">{t("ins_eyebrow")}</p>

        <h1>
          {t("ins_headline")}
        </h1>

        <p>
          {t("ins_intro")}
        </p>

      </section>


      {/* FEATURED */}

      {featured && (
        <section className="featured-insight">

          <span className="featured-tag">{t("ins_featured")}</span>

          <div className="featured-insight-content">
            <span className="insight-type-badge">{featured.typeLabel}</span>
            <h2>{featured.title}</h2>
            <p className="insight-source">
              {featured.source} · {featured.date}
            </p>
            <p className="insight-description">{featured.description}</p>

            <a
              href={featured.url}
              className="insight-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ins_listen_read")}
            </a>
          </div>

        </section>
      )}


      {/* GRID */}

      <section
        ref={gridRef}
        className={`insights-library reveal ${gridVisible ? "is-visible" : ""}`}
      >

        <div className="section-heading">
          <p className="eyebrow">{t("ins_browse_all")}</p>
          <h2>{t("ins_every")}</h2>
        </div>

        <div className="insights-filter-row">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={filter === f.key ? "insights-filter active" : "insights-filter"}
              onClick={() => setFilter(f.key)}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>

        <div className="insights-grid">
          {filtered.map((item, i) => (
            <article
              key={item.id}
              className="insight-card"
              style={{ transitionDelay: `${(i % 6) * 70}ms` }}
            >
              <span className="insight-type-badge">{item.typeLabel}</span>
              <h3>{item.title}</h3>
              <p className="insight-source">
                {item.source} · {item.date}
              </p>
              <p className="insight-description">{item.description}</p>

              <a
                href={item.url}
                className="insight-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("ins_view")}
              </a>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="insights-empty">{t("ins_empty")}</p>
          )}
        </div>

      </section>

    </div>
  );
}

export default Insights;