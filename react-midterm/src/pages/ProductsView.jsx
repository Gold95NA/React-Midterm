import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import Box from '../components/Box';
import Text from '../components/Text';

export default function Products() {
  const { data: products, loading } = useProducts();

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9rem' }}>
      {products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Box size="sm">
            <img src={product.image} alt={product.title} style={{ maxWidth: '100px', height: 'auto' }} />
            <Text size="small">{product.title}</Text>
          </Box>
        </Link>
      ))}
    </div>
  );
}