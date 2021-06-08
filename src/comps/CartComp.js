
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import './coffeeComp.css'

import { addProduct } from "../redux/action"


const Cart = () => {
    const cart = useSelector((state) => state.addProduct.items)
    const total = useSelector((state) => state.addProduct.total)
    const dispatch = useDispatch();
    console.log(cart)

    const renderCartList = cart.map((cart) => {
        const { id, title, price } = cart;


        return (
            <div className="item" key={id}>

                <div className="">

                    <div className="content">
                        <div className="item-header">
                            <h3 className="title"> {title} </h3>
                            <h3 className="price"> {price} kr</h3>
                        </div>
                    </div>

                </div>
            </div>
        );
    });


    return (
        <div>{renderCartList}
            <h3>total:{total}</h3>
        </div>

    )
}


export default Cart;