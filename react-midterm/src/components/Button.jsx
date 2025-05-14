import React from "react";
import { useTheme } from "../themes/ThemeContext";

export default function Button({ onClick, children }) {
  const { theme } = useTheme();

  const backgroundColor = theme.text;
  const textColor = theme.background; 

  return (
    <button
      onClick={onClick}
      style={{
        background: backgroundColor,
        color: textColor,
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "1rem",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
}