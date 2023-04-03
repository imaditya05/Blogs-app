import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 min-h-screen max-w-[650px] py-8 flex flex-col gap-y-7 justify-center items-center mt-20 mb-10">
      {' '}
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div> No Post Found</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              By <span className="italic">{post.author}</span> on{' '}
              <span className="font-bold underline">{post.category}</span>
            </p>
            <p className="text-xs">Posted on {post.date}</p>
            <p className="text-sm mt-3">{post.content}</p>
            <div className="flex gap-x-3 gap-y-1 flex-wrap ">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-500 font-bold underline text-xs mt-3"
                  >{` #${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
