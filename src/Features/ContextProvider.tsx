import {createContext,useReducer,useEffect } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext<any>(null);


function ContextProvider({children}: any) {
  // const [cart, dispatch] = useReducer(CartReducer,[]);
  const [cart, dispatch] = useReducer(
  CartReducer,
  [],
  () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
);
useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default ContextProvider;