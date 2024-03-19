import React, { useState } from 'react';
import PaginationProps from './PaginationProps';
import './Pagination.css';

const Paginator: React.FC<PaginationProps> = ({ length, postsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(length / postsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="paginator">
      <span>{`${currentPage} de ${totalPages}`}</span>
      <button onClick={handlePrevPage}>&lt;</button>
      <button onClick={handleNextPage}>&gt;</button>
    </div>
  );
}

export default Paginator;