import React, { useContext, useEffect } from "react";
import HomePage from "./Pages/HomePage"
import BlogPage from "./Pages/BlogPage"
import CategoryPage from "./Pages/CategoryPage"
import TagPage from "./Pages/TagPage"

import { AppContext } from "./Context/AppContextProvider";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

export const App = () => {
  const { fetchBlogPost } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log("OutPUt value of Tag from location.pathname ----", tag);
      fetchBlogPost(tag,"", Number(page));
    }

    if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(category, Number(page));
    } else {
      fetchBlogPost(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
};

export default App;
