import React from "react";
import ArticleThumbnail from "./ArticleThumbnail";
import "./ArticleList.css";

function ArticleList({ articles }) {
  return (
    <section className="article-list">
      <h2>Articles récents</h2>
      <div className="articles-container">
        {articles.map(article => (
          <ArticleThumbnail
            key={article.id}
            title={article.title}
            summary={article.summary}
            link={article.link}
            image={article.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ArticleList;
