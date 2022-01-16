import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "../pages/articleList";
import Home from "../pages/home";
import ArticlePage from "../pages/articlePage";
import { useArticleList } from "../utils";

const MyRouter: React.FC = () => {
  const titleList = useArticleList();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<ArticleList />} />
        {titleList.map((i, index) => {
          return (
            <Route
              key={index}
              path={`/articles/${i.title}`}
              element={<ArticlePage>{i.content}</ArticlePage>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
