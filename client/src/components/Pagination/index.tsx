import React from "react";
import "./Pagination.scss";

interface I_Pagination {
  pages: number;
  activePage: number;
  onClick: (index: number) => void;
}

const Pagination: React.FC<I_Pagination> = ({ pages, onClick, activePage }) => {
  const handleClick = (index: number) => {
    return onClick(index);
  };

  return (
    <div className="pagination">
      {!!pages &&
        [...Array(pages)].map((_, index) => (
          <button
            key={index}
            className={`pagination__btn ${
              index + 1 === activePage && "pagination__btn--active"
            }`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
