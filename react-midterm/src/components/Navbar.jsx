import { Link } from 'react-router-dom';
import { useTheme } from "../themes/ThemeContext";

export default function Navbar() {
  const { switchTheme, themeName, theme } = useTheme();

  return (
    <nav style={{ 
      backgroundColor: theme.background, 
      color: theme.text, 
      borderBottom: `1px solid ${theme.text}`, 
      padding: '1rem', 
      marginBottom: '8rem'
      }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "1rem" }}>Products</Link>
      <select value={themeName} onChange={(e) => switchTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="luffy">Luffy</option>
      </select>
    </nav>
  );
}