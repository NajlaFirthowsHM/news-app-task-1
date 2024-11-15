import React, { useState } from "react";
import SideNav from "./drawer";
import NewsFeed from "./apiPage";
import NewsDetails from "./articlePage";

const App = () => {
  const [category, setCategory] = useState("general");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const CategorySelection = (category) => {
    setCategory(category);
    setSelectedArticle(null);
    setIsSideNavOpen(false);
  };

  const ArticleSelection = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "fixed",
          boxShadow:
            "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
          background: "#fff",
          height: "72px",
          width: "100%",
          //   zIndex: 8,
          justifyContent: "center",
        }}
      >
        <button
          style={{
            height: 50,
            width: 70,
            background: "#fff",
            position: "relative",
            fontSize: 20,
            top: "16px",
            border: "none",
          }}
          onClick={() => setIsSideNavOpen(true)}
        >
          ☰
        </button>
        {isSideNavOpen && (
          <SideNav
            onSelectCategory={CategorySelection}
            onClose={() => setIsSideNavOpen(false)}
          />
        )}
      </div>
      <div
        style={{
          margin: "92px 20px 20px 20px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <NewsFeed category={category} onSelectArticle={ArticleSelection} />
        {selectedArticle && (
          <NewsDetails
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
