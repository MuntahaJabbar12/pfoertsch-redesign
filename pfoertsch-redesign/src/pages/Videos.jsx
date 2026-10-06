//videos.jsx
import { useState } from "react";
import { videos } from "../data/videos";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./Videos.css";

function Videos() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    "All",
    "H2H Marketing",
    "B2B Marketing",
    "Talks & Interviews",
  ];

  const categoryLabel = (cat) => {
    if (cat === "All") return t("vid_cat_all");
    if (cat === "Talks & Interviews") return t("vid_cat_talks");
    return cat; // H2H Marketing / B2B Marketing stay as-is, they are also data labels
  };

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  const featuredVideo = videos.find((video) => video.featured);

  return (
    <main className="videos-page">

      <SEO
        title="Videos"
        description="Watch talks, interviews, and discussions with Prof. Waldemar Pfoertsch on marketing, branding, innovation, and Human-to-Human thinking."
        path="/videos"
      />


      {/* =========================================
          HERO
      ========================================= */}
      <section className="videos-hero">
        <div className="videos-hero-inner">
          <p className="eyebrow">{t("vid_eyebrow")}</p>

          <h1>
            {t("vid_headline_1")}
            <br />
            <span>{t("vid_headline_2")}</span>
          </h1>

          <p className="videos-hero-description">
            {t("vid_intro")}
          </p>
        </div>
      </section>


      {/* =========================================
          FEATURED VIDEO
      ========================================= */}
      {featuredVideo && (
        <section className="featured-video-section">

          <div className="featured-video-label">
            <span>{t("vid_featured")}</span>
          </div>

          <div className="featured-video">

            <div className="featured-video-player">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="featured-video-info">

              <span className="video-category">
                {featuredVideo.category}
              </span>

              <h2>{featuredVideo.title}</h2>

              <p>{featuredVideo.description}</p>

              <a
                href={`https://www.youtube.com/watch?v=${featuredVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="video-watch-link"
              >
                {t("vid_watch_youtube")}
              </a>

            </div>

          </div>
        </section>
      )}


      {/* =========================================
          VIDEO LIBRARY
      ========================================= */}
      <section className="video-library">

        <div className="video-library-header">

          <div>
            <p className="eyebrow">{t("vid_explore")}</p>

            <h2>
              {t("vid_talks_1")}
              <br />
              {t("vid_talks_2")}
            </h2>
          </div>

          <p className="video-library-intro">
            {t("vid_library_intro")}
          </p>

        </div>


        {/* =========================================
            FILTERS
        ========================================= */}
        <div className="video-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "video-filter active"
                  : "video-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabel(category)}
            </button>
          ))}

        </div>


        {/* =========================================
            VIDEO GRID
        ========================================= */}
        <div className="video-grid">

          {filteredVideos.map((video) => (
            <article className="video-card" key={video.id}>

              {/* VIDEO THUMBNAIL */}

              <button
                type="button"
                className="video-thumbnail"
                onClick={() => setSelectedVideo(video)}
                aria-label={`Play ${video.title}`}
              >

                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                />

                <span className="play-button">
                  ▶
                </span>

              </button>


              {/* VIDEO INFORMATION */}

              <div className="video-card-info">

                <span className="video-category">
                  {video.category}
                </span>

                <h3>{video.title}</h3>

                <p>{video.description}</p>

                <button
                  type="button"
                  className="video-card-link"
                  onClick={() => setSelectedVideo(video)}
                >
                  {t("vid_watch_video")}
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}
      <section className="videos-cta">

        <div>
          <span>{t("vid_cta_label")}</span>

          <h2>
            {t("vid_cta_title_1")}
            <br />
            {t("vid_cta_title_2")}
          </h2>
        </div>

        <a href="/publications">
          {t("vid_explore_pubs")}
        </a>

      </section>


      {/* =========================================
          VIDEO MODAL
      ========================================= */}
      {selectedVideo && (
        <div
          className="video-modal"
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
        >

          <div
            className="video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              ×
            </button>


            {/* VIDEO */}

            <div className="video-modal-player">

              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>


            {/* VIDEO INFO */}

            <div className="video-modal-info">

              <span>
                {selectedVideo.category}
              </span>

              <h2>
                {selectedVideo.title}
              </h2>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default Videos;