import React from "react";
import Article from "../../components/Article";

const ArticlePage: React.FC = ({ children }) => {
  const handleText = (text: string) => {
    const list = text.split("\n");
    const start = list.findIndex((i) => i.includes("<!--"));
    const end = list.findIndex((i) => i.includes("-->"));
    const details = list
      .splice(start, end + 1)
      .filter((i) => !i.includes("<!--"))
      .filter((i) => !i.includes("-->"))
      .map((i) => i.replace("\r", ""))
      .reduce((acc, cur) => {
        const [key, value] = cur.split(":").map((i) => i.trim());
        return {
          ...acc,
          [key]: value,
        };
      }, {});

    return {
      details,
      article: list.join(""),
    };
  };

  const { details, article } = React.useMemo(
    () => handleText(children as string),
    []
  );

  return (
    <div className="container mx-auto">
      <Article>{article}</Article>
    </div>
  );
};

export default ArticlePage;
