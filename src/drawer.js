import React from "react";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export default function SideNav({ onSelectCategory, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "250px",
        height: "100%",
        backgroundColor: "#333",
        // color: 'white',
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        // transition: transform 0.3s ease-in-out,
      }}
    >
      <button
        style={{
          margin: " 20px 0",
          background: "none",
          borderColor: "white",
          height: 50,
        }}
        onClick={onClose}
      >
        ◀ Back
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{
            margin: " 10px 0",
            background: "none",
            borderColor: "white",
            height: 50,
          }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
