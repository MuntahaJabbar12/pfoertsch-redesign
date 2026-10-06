import { Link } from "react-router-dom";
import { FaLinkedin, FaAmazon, FaWikipediaW } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/waldemar-pfoertsch-1b41b94/",
    Icon: FaLinkedin,
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=IAxHVSAAAAAJ&hl=de",
    Icon: SiGooglescholar,
  },
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/profile/Waldemar-Pfoertsch",
    Icon: SiResearchgate,
  },
  {
    name: "Amazon Author Page",
    url: "https://www.amazon.com/stores/author/B00D71YZ6O",
    Icon: FaAmazon,
  },
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Waldemar_Pf%C3%B6rtsch",
    Icon: FaWikipediaW,
  },
];

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">

      <div className="footer-main">

        <div>
          <h2>PROF. PFÖRTSCH</h2>
          <p>{t("footer_tagline")}</p>

          <div className="footer-social">
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

        <div className="footer-links">

          <div>
            <h4>{t("footer_explore")}</h4>
            <Link to="/about">{t("nav_about")}</Link>
            <Link to="/expertise">{t("nav_expertise")}</Link>
            <Link to="/publications">{t("nav_publications")}</Link>
            <Link to="/books">{t("nav_books")}</Link>
          </div>

          <div>
            <h4>{t("footer_discover")}</h4>
            <Link to="/videos">{t("nav_videos")}</Link>
            <Link to="/insights">{t("nav_insights")}</Link>
            <Link to="/speaking">{t("nav_speaking")}</Link>
            <Link to="/contact">{t("nav_contact")}</Link>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <span>{t("footer_rights")}</span>

        <Link to="/appointment">
          {t("nav_appointment")} →
        </Link>
      </div>

    </footer>
  );
}

export default Footer;
