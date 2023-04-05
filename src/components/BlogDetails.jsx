import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div>
      <div className=" p-3">
        <NavLink to={`/blog/${post.id}`}>
          <p className="text-lg font-bold">{post.title}</p>
        </NavLink>
        <p className="text-xs">
          By <span className="italic">{post.author}</span> on{' '}
          <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`}>
            <span className="font-bold underline">{post.category}</span>
          </NavLink>
        </p>
        <p className="text-xs">Posted on {post.date}</p>
        <p className="text-sm mt-3">{post.content}</p>
        <div className="flex gap-x-3 gap-y-1 flex-wrap ">
          {post.tags.map((tag, index) => {
            return (
              <NavLink key={index} to={`/tags/${tag.replaceAll(' ', '-')}`}>
                <span className="text-blue-500 font-bold underline text-xs mt-3">{` #${tag}`}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
