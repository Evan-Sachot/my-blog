import React from "react";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

const articlesData = [
  {
    id: 1,
    title: "Wasting shit",
    summary: "Artiste de fou malade.",
    link: "#",
    image: "https://images.genius.com/d03374870628c3c43480d12fd06bda81.1000x1000x1.jpg"
  },
  {
    id: 2,
    title: "55asky",
    summary: "Aime trop les bonbons.",
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehDvB1epP5GOF3sswwl0rM5tA1nNuCA4ULg&s"
  },
  {
    id: 3,
    title: "le je sais plus quoi dire",
    summary: "abjomlksdqn mvoklnagemoljamvidolkj  akjlefl k voila tout",
    link: "#",
    image: "data:image/png;base64,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"
  }
];

function App() {
  return (
    <>
      <Header />
      <ArticleList articles={articlesData} />
    </>
  );
}

export default App;
