import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";

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

    
    const { cart,dispatch } = useContext(CartContext)

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
             <Link to={`/Cart`}><BsCart></BsCart>{cart.length}</Link>
             

            <div><input type="text" className= "search" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} /> 
              
            </div>

            {products.map(product => (
                <div className="card" key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>${product.price.toFixed(2)}</p>
                    <Link to={`/product-info/${product.id}`}>View Details</Link><br></br>
                    <button className="cart-button" onClick={() => {dispatch({type : "Add", product : product});}}>Add To Cart</button>
                    
                </div>
            ))}
      
      </div>
      </>
    )
    
}

export default Products;