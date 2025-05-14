import React from "react";
import { useTheme } from "../themes/ThemeContext";

const sizeMap = {
  small: "100px",
  sm: "100px",
  s: "100px",
  medium: "200px",
  md: "200px",
  m: "200px",
  large: "300px",
  lg: "300px",
  l: "300px",
};

export default function Box({ size = "medium", children }) {
  const { theme } = useTheme();
  const normalizedSize = size.toLowerCase();
  const boxSize = sizeMap[normalizedSize] || sizeMap["medium"];

  return (
    <div
      style={{
        width: boxSize,
        minHeight: boxSize,
        backgroundColor: theme.background, 
        color: theme.text,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}