import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateArticlePage.css"

function UpdateArticlePage() {
const { id } = useParams();
const [isLoading,setIsLoading]= useState(false)
const [error,setError] = useState(null)
const [article, setArticle] = useState({ title: "", content: "", image: "" });
const navigate = useNavigate();
const handleDelete=(e)=>{
    e.preventDefault()
    setIsLoading(true)

    fetch(`http://localhost:3001/articles/${id}`,{
        method:"DELETE",
        body: JSON.stringify(article),
        headers:{ "Content-Type":"application/json"}
    })
    .then((res)=>{
        if(!res.ok)throw new Error("erreur serveur")
    })
    .then((data)=>{
        console.log("article supprimer:",data)
        navigate("/")
    })
    .catch((err)=> setError(err.message))
     .finally(()=> setIsLoading(false))
}
const handleSubmit=(event)=>{
    event.preventDefault()
    setIsLoading(true)

    fetch(`http://localhost:3001/articles/${id}`,{
        method:"PUT",
        body: JSON.stringify(article),
        headers:{ "Content-Type":"application/json"}
    })
    .then((res)=>{
        if(!res.ok)throw new Error("erreur serveur")
    })
    .then((data)=>{
        console.log("article créé:",data)
        navigate("/")
    })
    .catch((err)=> setError(err.message))
     .finally(()=> setIsLoading(false))
}
useEffect(() => {
fetch(`http://localhost:3001/articles/${id}`)
.then((res) => res.json())
.then((data) => setArticle(data))
}, [id]);
return (<div>
    <form onSubmit={handleSubmit}>
      <h2>Modifier l'article</h2>
      {error && <p>{error}</p>}
      <input name="title" value={article.title}
       onChange={(e) => setArticle({ ...article, title: e.target.value })}/>
      <textarea
        name="content" value={article.content}
        onChange={(e) => setArticle({ ...article, content: e.target.value })}/>

      <input 
        name="image" value={article.image}
        onChange={(e) => setArticle({ ...article, image: e.target.value })}/>

      <button disabled={isLoading}>Enregistrer</button>
    </form>
    <form onSubmit={handleDelete}>
        <button disabled={isLoading}>Supprimer</button>
    </form>
    </div>
  );
}

export default UpdateArticlePage