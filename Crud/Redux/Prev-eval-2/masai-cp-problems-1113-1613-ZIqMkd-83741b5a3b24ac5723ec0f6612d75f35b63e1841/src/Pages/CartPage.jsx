import { useSelector } from "react-redux";

export const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  return <div data-testid="cart-list"></div>;
};
