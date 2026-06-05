const CartReducer = (
  state: any[],
  action: any
) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "REMOVE":
      return state.filter((product) => product.id !== action.product);

    default:
      return state;
  }
};

export default CartReducer;