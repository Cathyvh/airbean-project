import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions";

const ProductDetail = () => {

  /* 
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  console.log(productId);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:5000/api/coffee/${productId}`)
      .then((response) => console.log("DETAIL", response.data))
      .catch((error) => console.log(error));
    dispatch(selectedProduct(response.data));
  };
  React.useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
*/
  
  return (
    <div> <p> product detail </p></div>
  );
};

export default ProductDetail;