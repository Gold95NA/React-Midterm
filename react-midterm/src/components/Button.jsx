import React from "react";

export default function Button({ color = "#6200ea", onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}