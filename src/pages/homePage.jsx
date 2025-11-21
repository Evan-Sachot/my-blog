import ArticleList from "../components/ArticleList"; 

function HomePage ({articles}){
    

   return(
    <>
    <ArticleList articles={articles}/>
    </>
   )
}

export default HomePage