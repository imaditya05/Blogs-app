import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  console.log(location);
  const category = location.pathname.split('/').at(-1);
  console.log(category);

  return (
    <div>
      <Header />
      <div className=" w-full h-full flex flex-col justify-center items-center gap-y-2 bg-[#E5F4E7]">
        <button
          className="border rounded-md px-2 py-1 shadow-md bg-[#F1FDF3] text-sm mt-20"
          onClick={() => {
            navigation(-1);
          }}
        >
          Back
        </button>
        <h2 className="text-2xl font-bold">
          Blogs on <span>{category}</span>
        </h2>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryPage;
