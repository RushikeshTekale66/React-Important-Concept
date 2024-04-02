import React, { useState } from 'react';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  // Define your data array or list
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage)));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {data.slice(startIndex, endIndex).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>Next Page</button>
      </div>
    </div>
  );
};

export default MyComponent;
