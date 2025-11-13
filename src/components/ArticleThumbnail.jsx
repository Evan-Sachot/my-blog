import React from "react";
import "./ArticleThumbnail.css";
import { useState } from "react";

function ArticleThumbnail({ title, content, link, image }) {
    const [liked,setliked] =useState(false);
    const togglelike = () =>{
        setliked(!liked)
    }
  return (

    <div className="article-thumbnail">
        
      {image && <img src={image} alt={title} className="thumbnail-image" />}
      <h3>{title}</h3>
      
      <p>{content}</p>
      <a href={link} className="read-more">Lire la suite</a>
      <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={togglelike}>
        {liked?"❤️":"♡"}
        </button>
    </div>
  );
}

export default ArticleThumbnail;
