// Contact.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaAmazon, FaWikipediaW } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import contactPhoto from "../assets/professor.png";
import "./Contact.css";

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

const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/waldemar-pfoertsch-1b41b94/", Icon: FaLinkedin },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=IAxHVSAAAAAJ&hl=de", Icon: SiGooglescholar },
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Waldemar-Pfoertsch", Icon: SiResearchgate },
  { name: "Amazon Author Page", url: "https://www.amazon.com/stores/author/B00D71YZ6O", Icon: FaAmazon },
  { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Waldemar_Pf%C3%B6rtsch", Icon: FaWikipediaW },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const { t } = useLanguage();
  const [formRef, formVisible] = useReveal(0.05);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // NOTE for developer: replace this endpoint with a real form backend
      // (e.g. Formspree, Getform, or a custom API route) before going live.
      const response = await fetch("https://formspree.io/f/xljeygaa", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("sent");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-page">

      <SEO
        title="Contact"
        description="Get in touch with Prof. Waldemar Pfoertsch for speaking engagements, consulting projects, or questions about his publications and research."
        path="/contact"
      />


      {/* HERO */}

      <section className="contact-hero">
        <p className="eyebrow">{t("contact_eyebrow")}</p>
        <h1>{t("contact_headline")}</h1>
        <p>{t("contact_intro")}</p>
      </section>


      {/* FORM + INFO */}

      <section
        ref={formRef}
        className={`contact-main reveal ${formVisible ? "is-visible" : ""}`}
      >

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t("contact_send_message")}</h2>

          <div className="form-row">
            <label htmlFor="name">{t("contact_name")}</label>
            <input
              id="name"
              name="Name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact_name_ph")}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">{t("contact_email")}</label>
            <input
              id="email"
              name="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="subject">{t("contact_subject")}</label>
            <input
              id="subject"
              name="Subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder={t("contact_subject_ph")}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">{t("contact_message")}</label>
            <textarea
              id="message"
              name="Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact_message_ph")}
              required
            />
          </div>

          <button type="submit" className="primary-btn" disabled={status === "sending"}>
            <span>{status === "sending" ? t("contact_sending") : t("contact_send_btn")}</span>
            {status !== "sending" && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>

          {status === "sent" && (
            <p className="form-status success">{t("contact_success")}</p>
          )}
          {status === "error" && (
            <p className="form-status error">{t("contact_error")}</p>
          )}
        </form>

        {/* INFO PANEL */}
        <div className="contact-info">

          <div className="contact-photo">
            <img src={contactPhoto} alt={t("contact_photo_alt")} />
          </div>

          <div className="contact-info-block">
            <span className="info-label">{t("contact_info_email")}</span>
            <a href="mailto:contact@pfoertsch.com">contact@pfoertsch.com</a>
          </div>

          <div className="contact-info-block">
            <span className="info-label">{t("contact_info_location")}</span>
            <p>CIIM Nicosia, Cyprus</p>
            <p>Pforzheim University, Germany</p>
          </div>

          <div className="contact-info-block">
            <span className="info-label">{t("contact_info_response")}</span>
            <p>{t("contact_response_text")}</p>
          </div>

          <div className="contact-info-block">
            <span className="info-label">{t("contact_schedule")}</span>
            <Link to="/appointment" className="secondary-btn">
              {t("nav_appointment")}
            </Link>
          </div>

          <div className="contact-info-block">
            <span className="info-label">{t("contact_connect")}</span>
            <div className="contact-social">
              {SOCIALS.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;