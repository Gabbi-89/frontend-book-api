import React, { useEffect, useState } from 'react';

export const Books = () => {
  const [books, setBooks] = useState([]);
  const BOOKS_URL = `https://books-mongo-api.herokuapp.com/books`;

  useEffect(() => {
    fetch(BOOKS_URL)
      .then(res => res.json())
      .then(json => {
        setBooks(json.books)
        console.log(json.numberOfBooks);
      })
  }, []);

  return (
    <>
      <p>{books.numberOfBooks}</p>
      <section className="books-section">
        {books.map((book) => (
          <div key={book.bookID} className="book-wrapper">
            <p className="isbn-text">ISBN: {book.isbn}</p>
            <h3 className="title-text">{book.title}</h3>
            <p className="author-text"><span className="author-label">Author(s):</span> {book.author.name}</p>
            <div className="ratings-text">
              <p>Average rating: {book.average_rating}</p>
              <p>Number of reviews: </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};