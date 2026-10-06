import { useRef } from "react";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import BookCard from "./BookCard";
import "./BooksCarousel.css";

function BooksCarousel() {

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="books-section">

      <div className="books-header">

        <div>
          <p className="eyebrow">
            BOOKS & PUBLICATIONS
          </p>

          <h2>
            Knowledge that
            <br />
            becomes impact.
          </h2>
        </div>

        <div className="carousel-controls">

          <button
            onClick={scrollLeft}
            aria-label="Previous books"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next books"
          >
            →
          </button>

        </div>

      </div>


      <div
        className="books-carousel"
        ref={carouselRef}
      >

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>


      <div className="books-footer">

        <p>
          Explore books and publications by
          Waldemar Pfoertsch.
        </p>

        <Link to="/books">
          View All Books →
        </Link>

      </div>

    </section>
  );
}

export default BooksCarousel;