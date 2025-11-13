import React, { useState } from "react";
import { useEffect } from "react";
import ArticleThumbnail from "./ArticleThumbnail";
import "./ArticleList.css";

function ArticleList({ articles }) {
     const [searchTerm,setSearchTerm] =useState("")

     const [fetchedArticles, setFetchedArticles]= useState(articles)
     
    useEffect(( )=>{
        const url = "http://localhost:3001/articles"+ searchTerm
    

        fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw new Error ('echec de connexion')
            }return response.json()
        })
       
      .then((data)=>{
        setFetchedArticles(data);
      
      })
    },[searchTerm])
   
    const filtered = fetchedArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())|| article.content.toLowerCase().includes(searchTerm.toLocaleLowerCase())
);


  return (
    <section className="article-list">
      <h2>Truc que j'aime bien</h2>
      <input type="text" className="filter" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
      placeholder="Rechercher un articles" />
      <div className="articles-container">
        {filtered.map(article => (
          <ArticleThumbnail
            key={article.id}
            title={article ? article.title : "chargemnet..."}
            content={article ? article.content : "chargement..."}
            link={article.link}
            image={article ?  article.image : "chargement..."}
          />
        ))}
      </div>
    </section>
  );
}

export default ArticleList;
