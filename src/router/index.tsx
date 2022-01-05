import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "../pages/articleList";
import ReactMarkdown from "react-markdown";
import Home from "../pages/home";
import { useArticleList } from "../utils";

const MyRouter: React.FC = () => {
  const titleList = useArticleList();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<ArticleList />} />
        {titleList.map((i, index) => (
          <Route
            key={index}
            path={`/articles/${i.title}`}
            element={<ReactMarkdown>{i.content}</ReactMarkdown>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
