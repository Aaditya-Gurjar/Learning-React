import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import Blog from "./Components/Blog";
import { AppContext } from "./Context/AppContextProvider";

export const App = () => {
  const { fetchBlogPost } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPost();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blog />
      <Pagination />
    </div>
  );
};

export default App;
