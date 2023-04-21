import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer/action";

export const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(addToCart(data));
  };
  return (
    <div className="product-card">
      <img src={data.thumbnail} alt="" className="product-image" />
      <h2 className="product-title">{data.title}</h2>
      <p className="product-brand">{data.brand}</p>
      <p className="product-price">{data.price}</p>
      <p className="product-discount">{data.discountPercentage}</p>
      <button onClick={addtoCart} className="add-to-cart">
        Add to Cart
      </button>
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
    </div>
  );
};
