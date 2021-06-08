import { useEffect, React } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./coffeeComp";
import './coffeeComp.css'
import { setProducts } from "../redux/action";

function ProductList() {
    
     const products = useSelector((state) => state.allProducts.products);
     const dispatch = useDispatch();

   

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/api/coffee/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
}

export default ProductList;