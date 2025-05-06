import { useEffect, useState } from 'react';

export default function useProducts(id = null) {
  const [data, setData] = useState(id ? null : []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/db.json')
      .then((res) => res.json())
      .then((json) => {
        if (id) {
          const product = json.products.find((p) => p.id === parseInt(id));
          setData(product);
        } else {
          setData(json.products);
        }
        setLoading(false);
      });
  }, [id]);

  return { data, loading };
}