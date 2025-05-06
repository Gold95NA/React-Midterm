import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#eee', padding: '1rem', marginBottom: '8rem'}}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}