import React from "react";
import { useTheme } from "../themes/ThemeContext";

const fontSizeMap = {
  small: "0.875rem",
  medium: "1rem",
  large: "1.25rem",
};

export default function Text({ size = "medium", color, children }) {
  const { theme } = useTheme();
  const fontSize = fontSizeMap[size.toLowerCase()] || fontSizeMap["medium"];

  return (
    <p style={{ fontSize, color: color || theme.text }}>
      {children}
    </p>
  );
}