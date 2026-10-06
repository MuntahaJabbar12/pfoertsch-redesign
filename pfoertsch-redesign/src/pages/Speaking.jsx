// Speaking.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
// TODO: replace with the real photo from the AMA Academic Winter Conference
// (or another speaking engagement) once you have it — same placeholder
// pattern as About.jsx, just update this one import line.
import engagementPhoto from "../assets/teaching-whiteboard.jpg";
import "./Speaking.css";

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

const TOPICS = [
  { titleKey: "topic_1_title", descKey: "topic_1_desc" },
  { titleKey: "topic_2_title", descKey: "topic_2_desc" },
  { titleKey: "topic_3_title", descKey: "topic_3_desc" },
  { titleKey: "topic_4_title", descKey: "topic_4_desc" },
];

const FORMATS = [
  { id: "keynote", titleKey: "format_keynote", descKey: "format_keynote_desc" },
  { id: "workshop", titleKey: "format_workshop", descKey: "format_workshop_desc" },
  { id: "panel", titleKey: "format_panel", descKey: "format_panel_desc" },
  { id: "guest", titleKey: "format_guest", descKey: "format_guest_desc" },
];

function Speaking() {
  const { t } = useLanguage();
  const [openFormat, setOpenFormat] = useState("keynote");
  const [topicsRef, topicsVisible] = useReveal();
  const [formatsRef, formatsVisible] = useReveal();
  const [engagementRef, engagementVisible] = useReveal(0.3);
  const [bannerRef, bannerVisible] = useReveal();

  return (
    <div className="speaking-page">

      <SEO
        title="Speaking"
        description="Book Prof. Waldemar Pfoertsch for keynotes, executive workshops, panels, or guest lectures on Human-to-Human marketing, B2B brand strategy, and AI's role in branding."
        path="/speaking"
      />


      {/* HERO */}

      <section className="speaking-hero">

        <p className="eyebrow">{t("sp_eyebrow")}</p>

        <h1>{t("sp_headline")}</h1>

        <p>{t("sp_intro")}</p>

        <div className="speaking-hero-buttons">
          <Link to="/appointment" className="primary-btn">
            <span>{t("sp_enquire")}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/videos" className="secondary-btn">
            {t("sp_watch_past")}
          </Link>
        </div>

      </section>


      {/* RECENT ENGAGEMENT HIGHLIGHT */}

      <section
        ref={engagementRef}
        className={`speaking-engagement reveal ${engagementVisible ? "is-visible" : ""}`}
      >
        <div className="speaking-engagement-photo">
          <img src={engagementPhoto} alt={t("sp_engagement_caption")} />
        </div>
        <div className="speaking-engagement-text">
          <span className="engagement-tag">{t("sp_recent_engagement")}</span>
          <h2>{t("sp_engagement_title")}</h2>
          <p>{t("sp_engagement_desc")}</p>
        </div>
      </section>


      {/* SIGNATURE TOPICS */}

      <section
        ref={topicsRef}
        className={`speaking-topics reveal ${topicsVisible ? "is-visible" : ""}`}
      >

        <div className="section-heading">
          <p className="eyebrow">{t("sp_topics_eyebrow")}</p>
          <h2>{t("sp_topics_title")}</h2>
        </div>

        <div className="speaking-topics-grid">
          {TOPICS.map((topic, i) => (
            <div
              className="speaking-topic-card"
              key={topic.titleKey}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3>{t(topic.titleKey)}</h3>
              <p>{t(topic.descKey)}</p>
            </div>
          ))}
        </div>

      </section>


      {/* FORMATS ACCORDION */}

      <section
        ref={formatsRef}
        className={`speaking-formats reveal ${formatsVisible ? "is-visible" : ""}`}
      >

        <div className="section-heading light">
          <p className="eyebrow">{t("sp_formats_eyebrow")}</p>
          <h2>{t("sp_formats_title")}</h2>
        </div>

        <div className="speaking-accordion">
          {FORMATS.map((format) => {
            const isOpen = openFormat === format.id;
            return (
              <div
                key={format.id}
                className={isOpen ? "accordion-item open" : "accordion-item"}
              >
                <button
                  className="accordion-header"
                  onClick={() => setOpenFormat(isOpen ? null : format.id)}
                >
                  <span>{t(format.titleKey)}</span>
                  <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="accordion-body">
                  <p>{t(format.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* CTA BANNER */}

      <section
        ref={bannerRef}
        className={`speaking-banner reveal ${bannerVisible ? "is-visible" : ""}`}
      >
        <div className="speaking-banner-inner">
          <div>
            <p className="eyebrow">{t("lets_connect")}</p>
            <h2>{t("sp_banner_title")}</h2>
          </div>
          <Link to="/appointment" className="primary-btn btn-light">
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

export default Speaking;
