import React from "react";
import "./ArticleThumbnail.css";

function ArticleThumbnail({ title, summary, link, image }) {
  return (
    <div className="article-thumbnail">
      {image && <img src={image} alt={title} className="thumbnail-image" />}
      <h3>{title}</h3>
      <p>{summary}</p>
      <a href={link} className="read-more">Lire la suite</a>
    </div>
  );
}

export default ArticleThumbnail;
