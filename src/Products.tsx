import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

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
};


function Products(){

    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    console.log(searchTerm);
    useEffect(() => {
        fetch("https://dummyjson.com/products/search?q=" + searchTerm)
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, [searchTerm]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
    .then((data) => setProducts(data.products));
}, []);
  

    return(
        <>
        
        <div className="products">
            <h1>Products</h1>

            <div><input type="text" className= "search" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} /> 
              
            </div>

            {products.map(product => (
                <div className="card" key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>${product.price.toFixed(2)}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <Link to={`/product-info/${product.id}`}>View Details</Link>
                    
                </div>
            ))}
            
            {products.map(product => (
                <div className="card" key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>${product.price.toFixed(2)}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <Link to={`/product-info/${product.id}`}>View Details</Link>
                    
                </div>
            ))}
      
      </div>
      </>
    )
    
}

export default Products;