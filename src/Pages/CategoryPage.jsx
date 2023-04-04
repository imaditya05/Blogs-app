import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigation } from 'react-router-dom';

const CategoryPage = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const category = location.split('/').at(-1);
  <div>
    <Header />
    <div>
      <button
        className="border rounded-md px-2 py-1 shadow-md bg-[#F1FDF3] text-sm"
        onClick={() => {
          navigation(-1);
        }}
      >
        Back
      </button>
      <h2>
        Blogs of category <span>{category}</span>
      </h2>
      <Blogs />
      <Pagination />
    </div>
  </div>;
};

export default CategoryPage;
