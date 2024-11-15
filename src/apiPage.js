import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./card";

export default function NewsFeed({ category, onSelectArticle }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=864a868e9e7b4e7fb07f9b13c5fecce6`
        );
        const filteredArticles = response.data.articles.filter(article => article.source.id !== null    );
        console.log('erre',filteredArticles);
        
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <div
    >
      {articles.map((article) => (
        <NewsCard
          key={article.url}
          article={article}
          onSelectArticle={onSelectArticle}
        />
      ))}
    </div>
  );
}
