import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
  const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split('/').at(-1);

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log(relatedBlogs);
  }, [relatedBlogs]);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log('Error in fetching related blogs', error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }
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
        <div className="w-11/12 min-h-screen max-w-[650px] py-8 flex flex-col gap-y-7 justify-start items-center mb-10">
          {loading ? (
            <Spinner />
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2 className="text-2xl mt-8 mb-5">Related Blogs </h2>
              {relatedBlogs.map((post) => {
                return (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p>No Blog Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
