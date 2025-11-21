import React from "react";
import Header from "./components/Header";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ArticlesPages from "./pages/ArticlesPage";
import Perdu from "./pages/Perdu";
import ArticlesCreatePage from "./pages/ArticlesCreatePage";
import UpdateArticlePage from "./pages/UpdateArticlePage";
import "./App.css";


const articlesData = [
  
];

function App() {
  
  return (
  
    <BrowserRouter>
     <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
     <Route path="/articles/:id" element={<ArticlesPages />} />
     <Route path="/articles/:id/edit" element={<UpdateArticlePage/>}/>
     <Route path="/articles/create" element={<ArticlesCreatePage/>}/>
    <Route path="/*" element={<Perdu/>}/>
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

