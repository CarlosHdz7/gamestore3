/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useCallback, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { IPagination } from '../../interfaces/IPagination';

import './Pagination.scss';

const Pagination = ({
  gamesPerPage, totalPosts, paginate, currentPage,
}: IPagination) => {
  const [clickedId, setClickedId] = useState(currentPage);

  const calculateTotalPages = () => Math.ceil(totalPosts / gamesPerPage);
  const totalPages = useMemo(() => calculateTotalPages(), [totalPosts, gamesPerPage]);

  const pageNumbers = useMemo(() => {
    const pages: Array<number> = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  const handlePaginate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, number: number) => {
      e.preventDefault();
      setClickedId(number);
      paginate(number);
    }, [gamesPerPage],
  );

  const handlePrev = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const prevPage = currentPage - 1;
    if (prevPage > 0) {
      paginate(prevPage);
      setClickedId(prevPage);
    }
  };

  const handleNext = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const nextPage = currentPage + 1;
    if (nextPage <= pageNumbers.length) {
      paginate(nextPage);
      setClickedId(nextPage);
    }
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <a onClick={(e) => handlePrev(e)} href="!#" className="page-link">
            <i className="bi bi-caret-left-fill" />
          </a>
        </li>

        {pageNumbers.map((number: number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => handlePaginate(e, number)}
              href="!#"
              className={
                number === clickedId
                  ? 'page-link page-link-active'
                  : 'page-link'
              }
            >
              {number}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a onClick={(e) => handleNext(e)} href="!#" className="page-link">
            <i className="bi bi-caret-right-fill" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  gamesPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
