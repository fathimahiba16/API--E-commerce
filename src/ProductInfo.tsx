import {useEffect,useState} from "react";
import {useParams, Link} from 'react-router-dom'

type Product = {
    id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
}

function ProductInfo() {

    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [id]);

  return (
    <div className="product-info">
      {product ? (
        <div className="product-card">
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        <Link to="/">Back to Products</Link>
        
    </div>
  );
}

export default ProductInfo;