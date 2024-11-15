import React from "react";

export default function NewsCard({ article, onSelectArticle }) {
  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return (
    <div
      style={{
        height: 400,
        width: 1000,
        boxShadow:
          "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        marginBottom: 30,
      }}
      onClick={() => onSelectArticle(article)}
    >
      <img
        src={article?.urlToImage}
        style={{ height: 300, width: 400, objectFit: "contain", margin: 20 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ width: 500 }}>{article.title}</h3>
        <p style={{ width: 500, fontWeight: "lighter" }}>
          Short By {article.author} / {formattedDate}{" "}
        </p>
        <p>{article.description}</p>
      </div>
      {/* <p>{article.description}</p> */}
    </div>
  );
}
