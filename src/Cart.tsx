import { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, dispatch } =
    useContext(CartContext);

  return (
    <>
    
    <div className="cart-container" >
     

      <h1>Shopping Cart</h1>
       <Link to="/">Back</Link>
      

      {(cart.map((product: any) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              width="150"
            />

            <h2>{product.title}</h2>

            <h3>${product.price}</h3>

            <button className="cart-button"
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  product: product.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
    
    </>
  );
}

export default Cart;