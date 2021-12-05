import React from "react";
import articles from "../../articles";
import { Article } from "../../interface";
import { Link } from "react-router-dom";
const list: Array<Article> = Object.keys(articles).map((i) => ({
  title: i,
  content: articles[i],
}));

console.log(list);

const ArticleList: React.FC = () => {
  return (
    <>
      <div>文章列表</div>
      {list.map((i) => (
        <Link to={`/articles/${i.title}`}>{i.title}</Link>
      ))}
    </>
  );
};

export default ArticleList;
