import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 min-h-screen max-w-[650px] py-8 flex flex-col gap-y-7 justify-center items-center  mb-10">
      {' '}
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div> No Post Found</div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
