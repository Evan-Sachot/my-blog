import React, { useState, useEffect } from "react";
import { useParams,Link  } from "react-router-dom";
import "./ArticlesPage.css";


function ArticlesPages() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/articles?id=${id}`) 
      .then(res => res.json())
      .then(data => {
        setArticle(data[0]); 
      })
      .catch(err => console.error(err));
  }, [id]);

  
  if (!article) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
      <Link to={`/articles/${id}/edit`}>Edit article</Link>
    </div>
    
  );
}

export default ArticlesPages;
