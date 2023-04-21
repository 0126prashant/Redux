import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`;
  const dispatch = useDispatch();
  const prod = useSelector((store) => store.productReducer.products);
  useEffect(() => {
    dispatch(getProducts().getProductRequest());

    axios
      .get(url)
      .then((res) => {
        dispatch(getProducts().getProductSuccess(res.data));
      })
      .catch(() => {
        dispatch(getProducts().getProductFailure());
      });
  }, []);
  return (
    <div data-testid="product-list">
      {prod.map((el, index) => {
        return <ProductCard key={index} data={el} />;
      })}
    </div>
  );
};
