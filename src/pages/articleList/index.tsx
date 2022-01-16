import React from "react";
import { Link } from "react-router-dom";
import { useArticleList } from "../../utils";
import Article from "../../components/Article";

const ArticleList: React.FC = () => {
  const list = useArticleList();

  return (
    <div className="container mx-auto">
      <Article>
        <h1>文章列表</h1>
        {list.map((i, index) => (
          <Link key={index} to={`/articles/${i.title}`}>
            {i.title}
          </Link>
        ))}
      </Article>
    </div>
  );
};

export default ArticleList;
