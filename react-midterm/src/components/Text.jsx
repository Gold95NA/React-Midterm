import React from "react";

const fontSizeMap = {
  small: "0.875rem",
  medium: "1rem",
  large: "1.25rem",
};

export default function Text({ size = "medium", color = "#000", children }) {
  const normalizedSize = size.toLowerCase();
  const fontSize = fontSizeMap[normalizedSize] || fontSizeMap["medium"];

  return <p style={{ fontSize, color }}>{children}</p>;
}