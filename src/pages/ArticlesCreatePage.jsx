import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ArticlesCreatePage.css"


function ArticlesCreatePage(){
    const [newArticle,setNewArticle] = useState({
        title :"",
        content:""
    })
    const[error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(false)
    const navigate =useNavigate()
    
const handleSubmit=(event)=>{
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    fetch('http://localhost:3001/articles',{
        method:"POST",
        body: JSON.stringify(newArticle),
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
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Titre"
            value={newArticle.title}
            onChange={(e)=>setNewArticle({...newArticle,title:e.target.value})} />
            <textarea placeholder="Contenu"
            value={newArticle.content} onChange={(e)=> setNewArticle({...newArticle,content:e.target.value})}></textarea>
            <input 
        name="image" value={newArticle.image} placeholder="Image"
        onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}/>
            <button type="submit" disabled={isLoading}>{isLoading? "Création de l'article":"créer l'article"}</button>
        </form>
    )
}

export default ArticlesCreatePage