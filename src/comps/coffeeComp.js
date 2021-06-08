import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddBtn from '../img/add.png'
import './coffeeComp.css'
import { useState } from 'react';
import { addProduct } from "../redux/action"



const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  console.log(products)

  const renderList = products.map((product) => {
    const { id, title, desc, price } = product;

    function handleClick() {
      dispatch(addProduct(product))



    }

    return (
      <div className="item" key={id}>
        <a onClick={handleClick}>
          <img src={AddBtn} alt="" />
        </a>
        <div className="">

          <div className="content">
            <div className="item-header">
              <h3 className="title"> {title} </h3>
              <h3 className="price"> {price} kr</h3>
            </div>

            <p className="desc">{desc}</p>
          </div>

        </div>
      </div>
    );
  });


  return (
    <div>{renderList} </div>
  )
}

export default ProductComponent;