import React from 'react';
import articles from '../articles';
import { Article } from '../interface';

export const useArticleList = () => {
  return React.useMemo(() => {
    const list: Array<Article> = Object.keys(articles).map((i) => ({
      title: i,
      content: articles[i],
    }));
    return list;
  }, [articles])
}
