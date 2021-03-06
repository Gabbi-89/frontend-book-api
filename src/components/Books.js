import React, { useEffect, useState } from 'react';

import { Loader } from 'components/Loader';
import { Authors } from './Authors';

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState('');
  const BOOKS_URL = `https://books-mongo-api.herokuapp.com/books?page=${pageNumber}`;

  useEffect(() => {
    fetch(BOOKS_URL)
      .then(res => res.json())
      .then(json => {
        setBooks(json.limitedBooks);
        setLoading(false);
      })
  }, [pageNumber]);

  const moveNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const movePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const showAuthors = () => {
    setSection('Authors')
  };

  if (loading) {
    return <Loader />
  } else if (section === 'Authors') {
    return (<Authors />)
  } else {
    return (
      <>
        <div className="buttons-container">
          <button type="button" onClick={showAuthors}>List of Authors</button>
        </div>
        <p className="page-text">{`Page ${pageNumber + 1} / 24`}</p>
        <section className="objects-section">
          {books.map((book) => (
            <div key={book.bookID} className="object-wrapper">
              <p className="isbn-text">ISBN: {book.isbn}</p>
              <h3 className="title-text">{book.title}</h3>
              <p className="author-text"><span className="author-label">Author(s):</span> {book.author.name}</p>
              <div className="ratings-text">
                <p>Average rating: {book.average_rating}</p>
                <p>Number of reviews: {book.ratings_count}</p>
              </div>
            </div>
          ))}
        </section>
        <p className="page-text">{`Page ${pageNumber + 1} / 24`}</p>
        <div className="buttons-container">
          <button type="button" onClick={movePreviousPage}>Previous Page</button>
          <button type="button" onClick={moveNextPage}>Next Page</button>
        </div>
      </>
    )
  };
};