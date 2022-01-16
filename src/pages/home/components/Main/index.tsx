import React from "react";
import ReactMarkdown from "react-markdown";
import mySelf from "@/articles/mySelf.md?raw";
import Article from "../../../../components/Article";

const Main: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 mb-10">
      <Article>
        <ReactMarkdown>{mySelf}</ReactMarkdown>
        <a href="./articles">
          <h1>文章</h1>
        </a>
      </Article>
    </div>
  );
};

export default Main;
