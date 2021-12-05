import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "../pages/articleList";
import articles from "../articles";
import ReactMarkdown from "react-markdown";
import { Article } from "../interface";

const MyRouter: React.FC = () => {
  const titleList: Array<Article> = React.useMemo(() => {
    return Object.keys(articles).map((i) => ({
      title: i,
      content: articles[i],
    }));
  }, [articles]);

  console.log(titleList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<ArticleList />}></Route>
        {titleList.map((i, index) => (
          <Route
            key={index}
            path={`/articles/${i.title}`}
            element={<ReactMarkdown>{i.content}</ReactMarkdown>}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
