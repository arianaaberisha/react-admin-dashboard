import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  className = '',
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const buttons = [];

  if (currentPage > 2) {
    buttons.push(
      <span key="ellipsis1" className="px-2 py-1 text-sm">
        ...
      </span>
    );
  }
  if (currentPage > 1) {
    buttons.push(
      <button
        key={currentPage - 1}
        className="px-2 py-1 text-sm border hover:bg-gray-100 rounded"
        onClick={() => onPageChange(currentPage - 1)}
      >
        {currentPage - 1}
      </button>
    );
  }
  buttons.push(
    <button
      key={currentPage}
      className="px-2 py-1 text-sm bg-[#7367F0] text-white rounded"
    >
      {currentPage}
    </button>
  );

  if (currentPage < totalPages) {
    buttons.push(
      <button
        key={currentPage + 1}
        className="px-2 py-1 text-sm border hover:bg-gray-100 rounded"
        onClick={() => onPageChange(currentPage + 1)}
      >
        {currentPage + 1}
      </button>
    );
  }

  if (currentPage < totalPages - 1) {
    buttons.push(
      <span key="ellipsis2" className="px-2 py-1 text-sm">
        ...
      </span>
    );
  }

  return (
    <div className={`flex gap-1 overflow-x-auto ${className}`}>
      <button
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </button>
      <button
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        ‹
      </button>
      {buttons}
      <button
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
      <button
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination; 