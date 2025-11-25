import React, { useState } from "react";
import { useEffect } from "react";
import ArticleThumbnail from "./ArticleThumbnail";
import "./ArticleList.css";

function ArticleList() {
     const [searchTerm,setSearchTerm] =useState("")
  const [articles, setArticles] = useState([]);
    
     
    useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then(res => res.json())
      .then(data => setArticles(data))
      
  }, []);
   
    const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())|| article.content.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <section className="article-list">
      <h2>Trucs que j'aime bien</h2>
      <input type="text" className="filter" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
      placeholder="Rechercher un article" />
      <div className="articles-container">
        {filtered.map(article => (
          <ArticleThumbnail
            key={article.id}
            id={article.id}
            title={article ? article.title : "chargemnet..."}
            content={article ? article.content : "chargement..."}
            link={article.link}
            image={article ?  article.image : "chargement..."}
            isLiked={article.isLiked}
          />
        ))}
      </div>
    </section>
  );
}

export default ArticleList;
