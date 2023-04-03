import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

export default function App() {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
