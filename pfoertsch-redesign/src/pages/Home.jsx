// Home.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import professorImg from "../assets/professor.png";
import { useLanguage } from "../context/LanguageContext";
import { insights } from "../data/insights";
import SEO from "../components/SEO";

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

/* -------------------------------------------------
   Counter — animates a number up from 0 once its
   parent section becomes visible. Handles numeric
   prefixes like "40+" by animating just the digits.
------------------------------------------------- */
function Counter({ value, visible, duration = 1400 }) {
  const numericPart = parseInt(value, 10);
  const suffix = value.replace(String(numericPart), "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible || Number.isNaN(numericPart)) return undefined;

    let frame;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * numericPart));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(numericPart);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, numericPart, duration]);

  if (Number.isNaN(numericPart)) return <span>{value}</span>;

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const EXPERTISE_DATA = [
  { id: "01", titleKey: "branding_title", descKey: "branding_desc", link: "/expertise", labelKey: "home_explore" },
  { id: "02", titleKey: "marketing_title", descKey: "marketing_desc", link: "/expertise", labelKey: "home_explore" },
  { id: "03", titleKey: "innovation_title", descKey: "innovation_desc", link: "/expertise", labelKey: "home_explore" },
  { id: "04", titleKey: "consulting_title", descKey: "consulting_desc", link: "/speaking", labelKey: "home_discuss_project" },
];

const STATS = [
  { valueKey: "home_stat_1_value", labelKey: "home_stat_1_label" },
  { valueKey: "home_stat_2_value", labelKey: "home_stat_2_label" },
  { valueKey: "home_stat_3_value", labelKey: "home_stat_3_label" },
  { valueKey: "home_stat_4_value", labelKey: "home_stat_4_label" },
];

const INSTITUTIONS = [
  "Kellogg Graduate School of Management",
  "CEIBS Shanghai",
  "Pforzheim Business School",
  "Mannheim Business School",
  "TUM München",
  "EPOKA University",
  "CIIM Business School",
];

const HELP_ITEMS = [
  "home_help_item1",
  "home_help_item2",
  "home_help_item3",
  "home_help_item4",
  "home_help_item5",
  "home_help_item6",
];

const FAQ_ITEMS = [
  { id: "faq1", qKey: "faq_q1", aKey: "faq_a1" },
  { id: "faq2", qKey: "faq_q2", aKey: "faq_a2" },
  { id: "faq3", qKey: "faq_q3", aKey: "faq_a3" },
  { id: "faq4", qKey: "faq_q4", aKey: "faq_a4" },
  { id: "faq5", qKey: "faq_q5", aKey: "faq_a5" },
];

function Home() {
  const { t } = useLanguage();
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [statsRef, statsVisible] = useReveal(0.4);
  const [introRef, introVisible] = useReveal();
  const [institutionsRef, institutionsVisible] = useReveal(0.2);
  const [expertiseRef, expertiseVisible] = useReveal();
  const [helpRef, helpVisible] = useReveal();
  const [insightsRef, insightsVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();
  const [openFaq, setOpenFaq] = useState("faq1");
  const [bannerRef, bannerVisible] = useReveal();

  const latestInsights = insights.slice(0, 3);

  useEffect(() => {
    // trigger the hero's entrance animation on mount
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="home">

      <SEO
        title="Home"
        description="Prof. Waldemar Pfoertsch — professor, author, and consultant specializing in Human-to-Human (H2H) marketing, B2B brand strategy, and strategic innovation. Co-author with Philip Kotler."
        path="/"
      />
      {/* Hero Section */}
      <section className="hero">

        {/* animated floating gradient orbs, purely decorative */}
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-3" aria-hidden="true"></div>

        <div className={`hero-content ${heroLoaded ? "hero-in" : ""}`}>
          <p className="eyebrow hero-fade-1">{t("home_eyebrow")}</p>
          <h1 className="hero-fade-2">
            {t("home_headline_1")} <br />
            <span className="gradient-text shimmer">{t("home_headline_3")}</span>
          </h1>
          <p className="hero-description hero-fade-3">
            {t("home_intro")}
          </p>
          <div className="hero-buttons hero-fade-4">
            <Link to="/expertise" className="primary-btn">
              <span>{t("home_cta_expertise")}</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/appointment" className="secondary-btn">
              {t("home_cta_appointment")}
            </Link>
          </div>
        </div>

        <div className={`hero-image ${heroLoaded ? "hero-image-in" : ""}`}>
          <div className="image-placeholder">
            <img
              src={professorImg}
              alt="Prof. Waldemar Pfoertsch"
              className="professor-img"
            />
          </div>
        </div>
      </section>


      {/* Stats Strip */}
      <section
        ref={statsRef}
        className={`home-stats reveal ${statsVisible ? "is-visible" : ""}`}
      >
        {STATS.map((stat, i) => (
          <div
            className="home-stat"
            key={stat.labelKey}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <h3>
              <Counter value={t(stat.valueKey)} visible={statsVisible} />
            </h3>
            <p>{t(stat.labelKey)}</p>
          </div>
        ))}
      </section>


      {/* Intro / Story Section */}
      <section
        ref={introRef}
        className={`intro-section reveal ${introVisible ? "is-visible" : ""}`}
      >
        <p className="eyebrow">{t("home_banner_eyebrow")}</p>
        <h2>{t("home_banner_title")}</h2>
        <p>{t("home_banner_text")}</p>
      </section>


      {/* Institutions Marquee */}
      <section
        ref={institutionsRef}
        className={`home-institutions reveal ${institutionsVisible ? "is-visible" : ""}`}
      >
        <p className="home-institutions-label">{t("home_institutions_label")}</p>

        <div className="marquee">
          <div className="marquee-track">
            {[...INSTITUTIONS, ...INSTITUTIONS].map((name, i) => (
              <span className="marquee-item" key={`${name}-${i}`}>
                {name}
                <span className="marquee-dot">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Expertise Section */}
      <section
        ref={expertiseRef}
        className={`expertise-preview reveal ${expertiseVisible ? "is-visible" : ""}`}
      >
        <div className="section-heading">
          <p className="eyebrow">{t("home_expertise_eyebrow")}</p>
          <h2>{t("home_expertise_title")}</h2>
        </div>

        <div className="expertise-grid">
          {EXPERTISE_DATA.map((item, i) => (
            <div
              key={item.id}
              className="expertise-card"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="card-num">{item.id}</span>
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.descKey)}</p>
              <Link to={item.link} className="card-link">
                <span>{t(item.labelKey)}</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>


      {/* How I Can Help — scannable list */}
      <section
        ref={helpRef}
        className={`home-help reveal ${helpVisible ? "is-visible" : ""}`}
      >
        <div className="section-heading">
          <p className="eyebrow">{t("home_help_eyebrow")}</p>
          <h2>{t("home_help_title")}</h2>
        </div>

        <div className="home-help-list">
          {HELP_ITEMS.map((key, i) => (
            <div
              className="home-help-item"
              key={key}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <p>{t(key)}</p>
            </div>
          ))}
        </div>

        <Link to="/appointment" className="primary-btn">
          <span>{t("home_help_cta")}</span>
          <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </section>


      {/* Latest Insights Preview */}
      <section
        ref={insightsRef}
        className={`home-insights reveal ${insightsVisible ? "is-visible" : ""}`}
      >
        <div className="section-heading">
          <p className="eyebrow">{t("home_insights_eyebrow")}</p>
          <h2>{t("home_insights_title")}</h2>
        </div>

        <div className="home-insights-grid">
          {latestInsights.map((item, i) => (
            <div
              className="home-insight-card"
              key={item.id}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="home-insight-type">{item.typeLabel}</span>
              <h3>{item.title}</h3>
              <p className="home-insight-source">{item.source} · {item.date}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="home-insight-link">
                {t("home_insights_read")}
              </a>
            </div>
          ))}
        </div>

        <Link to="/insights" className="secondary-btn home-insights-view-all">
          {t("home_insights_view_all")}
        </Link>
      </section>


      {/* FAQ */}
      <section
        ref={faqRef}
        className={`home-faq reveal ${faqVisible ? "is-visible" : ""}`}
      >
        <div className="section-heading light">
          <p className="eyebrow">{t("home_faq_eyebrow")}</p>
          <h2>{t("home_faq_title")}</h2>
        </div>

        <div className="home-faq-accordion">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={isOpen ? "faq-item open" : "faq-item"}
              >
                <button
                  className="faq-header"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                >
                  <span>{t(faq.qKey)}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-body">
                  <p>{t(faq.aKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* Call to Action Banner */}
      <section
        ref={bannerRef}
        className={`appointment-banner reveal ${bannerVisible ? "is-visible" : ""}`}
      >
        <div className="banner-inner">
          <div className="banner-left">
            <p className="eyebrow">{t("home_banner2_eyebrow")}</p>
            <Link to="/appointment" className="primary-btn btn-light">
              <span>{t("home_cta_appointment")}</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="banner-right">
            <h2>{t("home_banner2_title")}</h2>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
