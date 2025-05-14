import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../themes/ThemeContext";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}