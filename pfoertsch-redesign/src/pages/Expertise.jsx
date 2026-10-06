// Expertise.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Expertise.css";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

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

const AREAS = [
  {
    id: "branding",
    labelKey: "branding_title",
    headlineKey: "branding_headline",
    descKey: "branding_full_desc",
    pointKeys: ["branding_pt1", "branding_pt2", "branding_pt3", "branding_pt4"],
  },
  {
    id: "marketing",
    labelKey: "marketing_title",
    headlineKey: "marketing_headline",
    descKey: "marketing_full_desc",
    pointKeys: ["marketing_pt1", "marketing_pt2", "marketing_pt3", "marketing_pt4"],
  },
  {
    id: "innovation",
    labelKey: "innovation_title",
    headlineKey: "innovation_headline",
    descKey: "innovation_full_desc",
    pointKeys: ["innovation_pt1", "innovation_pt2", "innovation_pt3", "innovation_pt4"],
  },
  {
    id: "consulting",
    labelKey: "consulting_title",
    headlineKey: "consulting_headline",
    descKey: "consulting_full_desc",
    pointKeys: ["consulting_pt1", "consulting_pt2", "consulting_pt3", "consulting_pt4"],
  },
];

function Expertise() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(AREAS[0].id);
  const [gridRef, gridVisible] = useReveal();
  const [bannerRef, bannerVisible] = useReveal();

  const active = AREAS.find((a) => a.id === activeId) || AREAS[0];

  return (
    <div className="expertise-page">

      <SEO
        title="Expertise"
        description="Explore Prof. Pfoertsch's four core areas of expertise: branding, marketing, innovation, and consulting, grounded in over two decades of research and hands-on work with global brands."
        path="/expertise"
      />


      {/* HERO */}

      <section className="expertise-hero">

        <p className="eyebrow">{t("exp_eyebrow")}</p>

        <h1>
          {t("exp_headline_1")}
          <br />
          {t("exp_headline_2")}
        </h1>

        <p>{t("exp_intro")}</p>

      </section>


      {/* TABBED EXPLORER */}

      <section
        ref={gridRef}
        className={`expertise-explorer reveal ${gridVisible ? "is-visible" : ""}`}
      >

        <div className="expertise-tabs">
          {AREAS.map((area) => (
            <button
              key={area.id}
              className={activeId === area.id ? "expertise-tab active" : "expertise-tab"}
              onClick={() => setActiveId(area.id)}
            >
              {t(area.labelKey)}
            </button>
          ))}
        </div>

        <div className="expertise-panel" key={active.id}>

          <div className="expertise-panel-text">
            <h2>{t(active.headlineKey)}</h2>
            <p>{t(active.descKey)}</p>

            <Link to="/appointment" className="primary-btn btn-light">
              <span>{t("exp_discuss_project")}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="expertise-panel-points">
            {active.pointKeys.map((pointKey, i) => (
              <div
                className="expertise-point"
                key={pointKey}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="expertise-point-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{t(pointKey)}</p>
              </div>
            ))}
          </div>

        </div>

      </section>


      {/* CTA BANNER */}

      <section
        ref={bannerRef}
        className={`expertise-banner reveal ${bannerVisible ? "is-visible" : ""}`}
      >
        <div className="expertise-banner-inner">
          <div>
            <p className="eyebrow">{t("lets_connect")}</p>
            <h2>{t("exp_banner_title")}</h2>
          </div>
          <Link to="/appointment" className="primary-btn">
            <span>{t("nav_appointment")}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Expertise;
