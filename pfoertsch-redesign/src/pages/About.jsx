// About.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import professorImg from "../assets/professor.png";
// ---- GALLERY PHOTOS ----
// Drop your 3 new teaching/event photos into src/assets/ and update
// these three import lines with the real filenames. That's the only
// change needed — the gallery grid below will pick them up automatically.
import galleryPhoto1 from "../assets/prof.PNG";
import galleryPhoto2 from "../assets/professor.png";
import galleryPhoto3 from "../assets/prof2.PNG";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

/* -------------------------------------------------
   useReveal — fades/slides a section in once it
   scrolls into view. No extra libraries needed.
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
   parent section becomes visible.
------------------------------------------------- */
function Counter({ value, suffix = "", visible, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;

    let frame;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const CREDENTIAL_ICONS = {
  "01": (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  "02": (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  "03": (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  "04": (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
};

const COMPANIES = ["Bosch", "Daimler", "HP", "Siemens", "IBM", "Panasonic"];

function About() {
  const { t } = useLanguage();
  const [statsRef, statsVisible] = useReveal(0.4);
  const [storyRef, storyVisible] = useReveal();
  const [galleryRef, galleryVisible] = useReveal();
  const [credRef, credVisible] = useReveal();
  const [companiesRef, companiesVisible] = useReveal();
  const [bannerRef, bannerVisible] = useReveal();

  // Gallery photos — currently pointing at the same placeholder image.
  // Once you have the real teaching/event photos, update the three
  // import lines at the top of this file (galleryPhoto1/2/3) and this
  // array will automatically use the real images, no other change needed.
  const GALLERY_PHOTOS = [
    { src: galleryPhoto1, alt: "Prof. Pfoertsch teaching" },
    { src: galleryPhoto2, alt: "Prof. Pfoertsch speaking at a conference" },
    { src: galleryPhoto3, alt: "Prof. Pfoertsch in a consulting session" },
  ];

  const STATS = [
    { value: 20, suffix: "+", labelKey: "about_stat_1" },
    { value: 9, suffix: "", labelKey: "about_stat_2" },
    { value: 6, suffix: "", labelKey: "about_stat_3" },
    { value: 2, suffix: "", labelKey: "about_stat_4" },
  ];

  const CREDENTIALS = [
    { id: "01", titleKey: "cred_1_title", descKey: "cred_1_desc" },
    { id: "02", titleKey: "cred_2_title", descKey: "cred_2_desc" },
    { id: "03", titleKey: "cred_3_title", descKey: "cred_3_desc" },
    { id: "04", titleKey: "cred_4_title", descKey: "cred_4_desc" },
  ];

  return (
    <div className="about-page">

      <SEO
        title="About"
        description="Three decades shaping brands, businesses, and markets. Learn about Prof. Waldemar Pfoertsch's academic career, credentials, and consulting work with global firms including Mercedes-Benz, HP, and IBM."
        path="/about"
      />


      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-text">
          <p className="eyebrow">{t("about_eyebrow")}</p>

          <h1>
            {t("about_headline_1")}
            <br />
            <span className="gradient-text">{t("about_headline_2")}</span>
          </h1>

          <p className="about-hero-description">
            {t("about_description")}
          </p>

          <div className="about-hero-buttons">
            <Link to="/publications" className="primary-btn">
              <span>{t("about_view_publications")}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/appointment" className="secondary-btn">
              {t("nav_appointment")}
            </Link>
          </div>
        </div>

        <div className="about-hero-image">
          <img src={professorImg} alt="Prof. Waldemar Pförtsch" />
          <div className="about-image-badge">
            <strong>20+</strong>
            <span>{t("about_years_experience")}</span>
          </div>
        </div>

      </section>


      {/* STATS STRIP */}

      <section
        ref={statsRef}
        className={`about-stats reveal ${statsVisible ? "is-visible" : ""}`}
      >
        {STATS.map((stat, i) => (
          <div
            className="about-stat"
            key={stat.labelKey}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <h3>
              <Counter value={stat.value} suffix={stat.suffix} visible={statsVisible} />
            </h3>
            <p>{t(stat.labelKey)}</p>
          </div>
        ))}
      </section>


      {/* BIO NARRATIVE */}

      <section
        ref={storyRef}
        className={`about-story reveal ${storyVisible ? "is-visible" : ""}`}
      >

        <p className="eyebrow">{t("about_story_eyebrow")}</p>

        <h2>
          {t("about_story_title_1")}
          <br />
          {t("about_story_title_2")}
        </h2>

        <div className="about-story-columns">
          <p>{t("about_story_p1")}</p>
          <p>{t("about_story_p2")}</p>
        </div>

      </section>


      {/* PHOTO GALLERY */}

      <section
        ref={galleryRef}
        className={`about-gallery reveal ${galleryVisible ? "is-visible" : ""}`}
      >

        <div className="section-heading">
          <p className="eyebrow">{t("about_gallery_eyebrow")}</p>
          <h2>{t("about_gallery_title")}</h2>
        </div>

        <div className="about-gallery-grid">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              className="about-gallery-item"
              key={photo.alt}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

      </section>


      {/* CREDENTIALS GRID */}

      <section
        ref={credRef}
        className={`about-credentials reveal ${credVisible ? "is-visible" : ""}`}
      >

        <div className="section-heading">
          <p className="eyebrow">{t("about_credentials_eyebrow")}</p>
          <h2>{t("about_credentials_title")}</h2>
        </div>

        <div className="about-credentials-grid">
          {CREDENTIALS.map((item, i) => (
            <div
              key={item.id}
              className="about-credential-card"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="about-credential-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {CREDENTIAL_ICONS[item.id]}
                </svg>
              </div>
              <span className="card-num">{item.id}</span>
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.descKey)}</p>
            </div>
          ))}
        </div>

      </section>


      {/* COMPANIES */}

      <section
        ref={companiesRef}
        className={`about-companies reveal ${companiesVisible ? "is-visible" : ""}`}
      >

        <p className="eyebrow">{t("about_companies_eyebrow")}</p>

        <h2>
          {t("about_companies_title_1")}
          <br />
          {t("about_companies_title_2")}
        </h2>

        <div className="about-companies-list">
          {COMPANIES.map((name, i) => (
            <span
              key={name}
              className="about-company-pill"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {name}
            </span>
          ))}
        </div>

      </section>


      {/* CTA BANNER */}

      <section
        ref={bannerRef}
        className={`about-banner reveal ${bannerVisible ? "is-visible" : ""}`}
      >
        <div className="about-banner-inner">
          <div className="about-banner-left">
            <p className="eyebrow">{t("lets_connect")}</p>
            <Link to="/appointment" className="primary-btn btn-light">
              <span>{t("nav_appointment")}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="about-banner-right">
            <h2>
              {t("about_banner_title")}
            </h2>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
