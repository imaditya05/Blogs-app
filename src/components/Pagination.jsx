import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-around items-center  fixed bottom-0 bg-[#E5F4E7] p-2">
      <div className="flex gap-1">
        {page > 1 && (
          <button
            className="border rounded-md px-2 py-1 shadow-md bg-[#F1FDF3] text-sm"
            onClick={() => {
              handlePageChange(page - 1);
            }}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="border rounded-md px-2 py-1 shadow-md bg-[#F1FDF3] text-sm"
            onClick={() => {
              handlePageChange(page + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
      <div>
        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
