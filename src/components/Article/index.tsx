import React from "react";
import ReactMarkdown from "react-markdown";

const Article: React.FC = ({ children }) => {
  if (typeof children === "string") {
    
    
    

    return (
      <article className="prose">
        <ReactMarkdown>{children}</ReactMarkdown>
      </article>
    );
  } else {
    return <article className="prose">{children}</article>;
  }
};

export default Article;
