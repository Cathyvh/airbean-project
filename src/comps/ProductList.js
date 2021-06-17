import { useEffect, React } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Coffee from "./Coffee";
import './Coffee.css'
import { setProducts } from "../redux/action";
import Cart from './Cart'
import Navbar from './Navbar';
import Footer from './Footer'

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
    <div>
      <Cart />
      <Navbar />

      <div className="coffee-container">
        <h1>Meny</h1>
        <Coffee />
      </div>

    </div>

  );
}

export default ProductList;