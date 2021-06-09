
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import './cart.css'

import { addProduct } from "../redux/action"


const Cart = () => {
    const cart = useSelector((state) => state.addProduct.items)
    const total = useSelector((state) => state.addProduct.total)
    const dispatch = useDispatch();
    console.log(cart)

    const renderCartList = cart.map((cart) => {
        const { id, title, price } = cart;


        return (
            <div className="cart" key={id}>

                <div className="cart2">
                    <div className="cart-content">
                        <div className="cart-item">
                            <h3 className="title"> {title} </h3>
                            <h3 className="price"> {price} kr</h3>
                        </div>
                    </div>

                </div>
            </div>
        );
    });


    return (
        <div className="cart-container">
            <h1 className="cart-header" >Din beställning</h1>
            <div>{renderCartList}</div>
            <div className="cart-total">
                <h3>Total</h3> <h3>{total}</h3>
                <p>inkl moms + drönarleverans</p>
            </div>
            <button>Take my money!</button>
        </div>


    )
}


export default Cart;