import React from "react";
import ReactMarkdown from "react-markdown";
import mySelf from "@/articles/mySelf.md?raw";

const Main: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 mb-10">
      <article className="prose">
        <ReactMarkdown>{mySelf}</ReactMarkdown>
      </article>
    </div>
  );
};

export default Main;
