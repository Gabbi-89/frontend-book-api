import React, { useEffect, useState } from 'react';

export const Pages = () => {
  const [page, setPage] = useState([]);
  // let pageNumber = page - 1;

  const changePage = () => {
    setPage(parseInt(page === 9))
  }

  const PAGE_URL = `https://books-mongo-api.herokuapp.com/books?page=${page}`;

  useEffect(() => {
    fetch(PAGE_URL)
      .then(res => res.json)
      .then(json => {
        setPage(json.limitedBooks);
        console.log(json.limitedBooks)
      })
  })

  return (
    <div className="page-wrapper">
      <button className="page-button" type="button">1</button>
      <button className="page-button" type="button">2</button>
      <button className="page-button" type="button">3</button>
      <button className="page-button" type="button">4</button>
      <button className="page-button" type="button">5</button>
      <button className="page-button" type="button">6</button>
      <button className="page-button" type="button">7</button>
      <button className="page-button" type="button">8</button>
      <button className="page-button" type="button">9</button>
      <button className="page-button" type="button" onClick={changePage}>10</button>
    </div>
  );
};