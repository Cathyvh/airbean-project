import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddBtn from '../img/add.png'
import './coffeeComp.css'
import { useState } from 'react';
import { addProduct } from "../redux/action"



const Coffee = () => {
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
        <div className="item-content">
          <div btn-div>
            <a className="addbtn" onClick={handleClick}>
              <img src={AddBtn} alt="" />
            </a>
          </div>

          <div className="title-div">
            <h2 id="left" className="title"> {title} </h2>
            <p id="left" className="desc">{desc}</p>
          </div>
          <div className="price-div">
            <h2 className="price"> {price} kr</h2>
          </div>
        </div>

      </div>

    );
  });


  return (
    <div className=" ">{renderList} </div>
  )
}

export default Coffee
  ;