import { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //Filling data
  async function fetchData(page = 1) {
    setLoading(true);
    try {
      const result = await fetch(`${baseUrl}?page=${page}`);
      const data = await result.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log('Error fetching data', error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchData(page);
  }

  const contextData = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchData,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
