import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigation } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
const TagPage = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const tag = location.split('/').at(-1);
  return (
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
          Blogs Tagged <span>#{tag}</span>
        </h2>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default TagPage;
