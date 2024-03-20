import React, { useEffect, useState } from 'react';
import PaginationProps from './PaginationProps';
import './Pagination.css';

const Paginator: React.FC<PaginationProps> = ({ length, postsPerPage, onPageChange, currentPageExternal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(length / postsPerPage);

  useEffect(() => {
    setCurrentPage(currentPageExternal);
  }, [currentPageExternal])

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