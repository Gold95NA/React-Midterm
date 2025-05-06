import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import Button from '../components/Button';
import Text from '../components/Text';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading } = useProducts(id);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
      <Text size="large">{product.title}</Text>
      <Text size="medium">{product.description}</Text>
      <Text size="medium">Price: ${product.price}</Text>
      <Button color="#444" onClick={() => navigate(-1)}>← Back to Products</Button>
    </div>
  );
}