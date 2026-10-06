import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", key: "nav_home" },
  { to: "/about", key: "nav_about" },
  { to: "/expertise", key: "nav_expertise" },
  { to: "/videos", key: "nav_videos" },
  { to: "/insights", key: "nav_insights" },
  { to: "/speaking", key: "nav_speaking" },
  { to: "/contact", key: "nav_contact" },
];

const PUBLICATION_LINKS = [
  {
    to: "/publications?category=books",
    key: "nav_books",
  },
  {
    to: "/articles",
    label: "Articles",
  },
  {
    to: "/case-studies",
    label: "Case Studies",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobilePublicationsOpen, setMobilePublicationsOpen] =
    useState(false);

  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  function closeMenu() {
    setMenuOpen(false);
    setMobilePublicationsOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span>PROF.</span> PFÖRTSCH
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links-desktop">

          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.to}
              to={link.to}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* PUBLICATIONS DROPDOWN */}
          <div className="publications-dropdown">

            <Link
              to="/publications"
              className="publications-trigger"
            >
              {t("nav_publications")}

              <span className="dropdown-arrow">
                ⌄
              </span>
            </Link>

            <div className="publications-menu">

              <div className="publications-menu-header">
                {t("nav_publications")}
              </div>

              <div className="publications-menu-grid">

                {PUBLICATION_LINKS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="publication-dropdown-link"
                  >
                    <span>
                      {item.key
                        ? t(item.key)
                        : item.label}
                    </span>

                    <span className="dropdown-link-arrow">
                      →
                    </span>
                  </Link>
                ))}

              </div>
            </div>
          </div>

          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.to}
              to={link.to}
            >
              {t(link.key)}
            </Link>
          ))}

        </nav>

        {/* ACTIONS */}
        <div className="navbar-actions">

          {/* LANGUAGE */}
          <button
            className="icon-toggle"
            onClick={toggleLanguage}
            aria-label="Switch language"
            title={
              language === "en"
                ? "Switch to Greek"
                : "Switch to English"
            }
          >
            {language === "en" ? "GR" : "EN"}
          </button>

          {/* THEME */}
          <button
            className="icon-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            {theme === "light" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                />

                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>

          {/* APPOINTMENT */}
          <Link
            to="/appointment"
            className="appointment-btn"
          >
            {t("nav_appointment")}
          </Link>

          {/* HAMBURGER */}
          <button
            className={
              menuOpen
                ? "menu-toggle open"
                : "menu-toggle"
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((v) => !v)
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        className={
          menuOpen
            ? "navbar-links-mobile open"
            : "navbar-links-mobile"
        }
      >

        <Link
          to="/"
          onClick={closeMenu}
        >
          {t("nav_home")}
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
        >
          {t("nav_about")}
        </Link>

        <Link
          to="/expertise"
          onClick={closeMenu}
        >
          {t("nav_expertise")}
        </Link>

        {/* MOBILE PUBLICATIONS */}
        <div className="mobile-publications">

          <button
            className="mobile-publications-trigger"
            onClick={() =>
              setMobilePublicationsOpen(
                (v) => !v
              )
            }
            aria-expanded={
              mobilePublicationsOpen
            }
          >
            <span>
              {t("nav_publications")}
            </span>

            <span
              className={
                mobilePublicationsOpen
                  ? "mobile-arrow rotated"
                  : "mobile-arrow"
              }
            >
              ⌄
            </span>
          </button>

          <div
            className={
              mobilePublicationsOpen
                ? "mobile-publications-menu open"
                : "mobile-publications-menu"
            }
          >

            {PUBLICATION_LINKS.map(
              (item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                >
                  {item.key
                    ? t(item.key)
                    : item.label}
                </Link>
              )
            )}

          </div>
        </div>

        <Link
          to="/videos"
          onClick={closeMenu}
        >
          {t("nav_videos")}
        </Link>

        <Link
          to="/insights"
          onClick={closeMenu}
        >
          {t("nav_insights")}
        </Link>

        <Link
          to="/speaking"
          onClick={closeMenu}
        >
          {t("nav_speaking")}
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          {t("nav_contact")}
        </Link>

        {/* MOBILE CONTROLS */}
        <div className="mobile-toggle-row">

          <button
            className="icon-toggle"
            onClick={toggleLanguage}
          >
            {language === "en"
              ? "GR"
              : "EN"}
          </button>

          <button
            className="icon-toggle"
            onClick={toggleTheme}
          >
            {theme === "light"
              ? "Dark mode"
              : "Light mode"}
          </button>

        </div>

        {/* MOBILE APPOINTMENT */}
        <Link
          to="/appointment"
          className="appointment-btn-mobile"
          onClick={closeMenu}
        >
          {t("nav_appointment")}
        </Link>

      </nav>
    </header>
  );
}

export default Navbar;