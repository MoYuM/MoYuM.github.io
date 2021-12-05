import React from "react";
import { Link } from "react-router-dom";
import { useArticleList } from "../../utils";

const ArticleList: React.FC = () => {
  const list = useArticleList();

  return (
    <>
      <div>文章列表</div>
      {list.map((i, index) => (
        <Link key={index} to={`/articles/${i.title}`}>
          {i.title}
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
