import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-2 bg-[#E5F4E7]">
      <Header />
      <div className="mt-20"></div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default Home;
