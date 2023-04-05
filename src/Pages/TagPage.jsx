import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);
  return (
    <div>
      <Header />
      <div className=" w-full h-full flex flex-col justify-start items-center gap-y-4 bg-[#E5F4E7]">
        <button
          className="border rounded-md px-2 py-1 shadow-md bg-[#F1FDF3] text-sm mt-20 "
          onClick={() => {
            navigation(-1);
          }}
        >
          Back
        </button>
        <h2 className="text-2xl font-bold text-center ">
          Blogs Tagged <span>#{tag}</span>
        </h2>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default TagPage;
