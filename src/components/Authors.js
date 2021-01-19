import React, { useEffect, useState } from 'react';

export const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const AUTHORS_URL = 'https://books-mongo-api.herokuapp.com/authors';

  useEffect(() => {
    fetch(AUTHORS_URL)
      .then(res => res.json())
      .then(json => {
        setAuthors(json);
      })
  }, []);

  return (
    <div className="objects-section">
      {authors.map((author) => (
        <div className="object-wrapper">
          <p>{author.name}</p>
        </div>
      ))}
    </div>
  )
}