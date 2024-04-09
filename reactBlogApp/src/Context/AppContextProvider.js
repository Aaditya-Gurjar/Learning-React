import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  
  async function fetchBlogPost(page = 1) {
    console.log("Hello")
    setLoading(true);
    try {
      const result = await fetch(`${baseUrl}?page=${page}`);
      console.log(result);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }
  

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPost(page);
  }
  

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPost,
    handlePageChange,
  };
  console.log("The result value of api call", value);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
  
