import Home from '../src/Pages/Home';
import BlogPage from '../src/Pages/BlogPage';
import CategoryPage from '../src/Pages/CategoryPage';
import TagPage from '../src/Pages/TagPage';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';

export default function App() {
  const { fetchData } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get('page') ?? 1;
    if (location.pathname.includes('tags')) {
      const tag = location.pathname.split('/').at(-1).replace('-', ' ');
      fetchData(Number(page), tag);
    } else if (location.pathname.includes('categories')) {
      const category = location.pathname.split('/').at(-1).replace('-', ' ');
      fetchData(Number(page), null, category);
    } else {
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogid" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
