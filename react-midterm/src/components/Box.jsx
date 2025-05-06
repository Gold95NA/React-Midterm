import React from "react";

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
  const normalizedSize = size.toLowerCase();
  const boxSize = sizeMap[normalizedSize] || sizeMap["medium"];

  return (
    <div
      style={{
        width: boxSize,
        height: boxSize,
        backgroundColor: "#ffff", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
}