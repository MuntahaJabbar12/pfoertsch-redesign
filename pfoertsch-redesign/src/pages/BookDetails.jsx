import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./BookDetails.css";

function BookDetails() {
  const { t } = useLanguage();
  const { id } = useParams();

  const book = books.find(
    (item) => item.id === Number(id)
  );

  if (!book) {
    return (
      <div className="book-not-found">
        <SEO title="Book Not Found" description="This book could not be found." path="/books" noindex />
        <h1>{t("bd_not_found")}</h1>

        <Link to="/books">
          {t("bd_back")}
        </Link>
      </div>
    );
  }

  return (
    <main className="book-details-page">

      <SEO
        title={book.title}
        description={book.description}
        path={`/books/${book.id}`}
      />

      {/* BACK BUTTON */}

      <div className="book-details-top">
        <Link to="/books">
          {t("bd_back")}
        </Link>
      </div>


      {/* BOOK INTRO */}

      <section className="book-details">

        {/* BOOK COVER */}

        <div className="book-details-image">

          <img
            src={book.image}
            alt={book.title}
          />

        </div>


        {/* BOOK INFORMATION */}

        <div className="book-details-info">

          <span className="book-details-type">
            {book.type === "amazon"
              ? t("books_badge_amazon")
              : t("books_badge_digital")}
          </span>

          <h1>
            {book.title}
          </h1>

          <p className="book-details-authors">
            {book.authors}
          </p>

          <div className="book-details-line"></div>

          <p className="book-details-description">
            {book.description}
          </p>


          {/* META INFORMATION */}

          <div className="book-details-meta">

            <div>
              <span>{t("bd_publisher")}</span>
              <strong>{book.publisher}</strong>
            </div>

            {book.edition && (
              <div>
                <span>{t("bd_edition")}</span>
                <strong>{book.edition}</strong>
              </div>
            )}

          </div>


          {/* PURCHASE */}

          <div className="book-purchase">

            <p>
              {t("bd_available")}
            </p>

            {book.type === "amazon" ? (

              <a
                href={book.amazonUrl}
                className="purchase-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("books_buy_amazon")}
              </a>

            ) : (

              <button className="purchase-button">
                {t("books_buy_pdf")}
              </button>

            )}

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="book-about">

        <div className="book-about-label">
          <span>01</span>
          <span>{t("bd_about_label")}</span>
        </div>

        <div className="book-about-content">

          <h2>{t("bd_about_title")}</h2>

          <p>
            {book.description}
          </p>

          <p>{t("bd_about_text")}</p>

        </div>

      </section>


      {/* CTA */}

      <section className="book-details-cta">

        <div>

          <span>
            {t("bd_more_pubs")}
          </span>

          <h2>{t("bd_explore_collection")}</h2>

        </div>

        <Link to="/books">
          {t("bd_view_all")}
        </Link>

      </section>

    </main>
  );
}

export default BookDetails;
