import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArticleThumbnail.css";

function ArticleThumbnail({ id, title, content, image, isLiked }) {
  const [liked,setLiked] = useState(isLiked)
  const toggleLike = ()=>{
    const newLikeState = !liked
  
    fetch(`http://localhost:3001/articles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isLiked: newLikeState }),
    })
      .then(res => res.json())
      .then(data => {

        setLiked(data.isLiked);       
      });
 }
    
  return (
    <div className="article-thumbnail">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{content.slice(0, 80)}...</p>
      <button
        className={liked ? "liked-button" : "like-button"}
        onClick={toggleLike}
      >{liked ? "❤️":"🤍"}</button>
      <Link to={`/articles/${id}`}>Voir l'article</Link>
    </div>
  );
 };

export default ArticleThumbnail;