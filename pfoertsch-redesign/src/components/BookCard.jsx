import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book }) {
  return (
    <article className="book-card">

      <div className="book-image-wrapper">
        <img
          src={book.image}
          alt={book.title}
          className="book-image"
        />
      </div>

      <div className="book-info">

        <span className="book-type">
          {book.type === "PDF" ? "DIGITAL EDITION" : "AMAZON EDITION"}
        </span>

        <h3>{book.title}</h3>

        <p>{book.authors}</p>

        <Link
          to={`/books/${book.id}`}
          className="book-link"
          style={{ color: "#ffffff" }}
        >
          View Book →
        </Link>

      </div>

    </article>
  );
}

export default BookCard;