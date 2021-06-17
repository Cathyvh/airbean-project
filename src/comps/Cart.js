import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './cart.css'

import { openCart } from "../redux/action"
import { setOrder } from "../redux/action"
import { setOrderTotal } from "../redux/action"
import { resetCart } from "../redux/action"
import bag from '../img/bag.svg'
import { useHistory } from 'react-router-dom';
import { postOrder } from '../utils/api'

const Cart = () => {
    const cart = useSelector((state) => state.addProduct.items)
    const total = useSelector((state) => state.addProduct.total)
    const open = useSelector((state) => state.openCart.open)
    const amount = useSelector((state) => state.addProduct.items.length)
    const user = useSelector((state) => state.currentUserReducer.currentUser.id)
    const dispatch = useDispatch();
    const history = useHistory()


    const handleCartOpen = () => {
        dispatch(openCart(open))
    }
    const handleClick = async () => {
        const account = await postOrder({ cart, user, total })
        console.log(account)
        dispatch(setOrder(account))

        dispatch(resetCart())
        dispatch(openCart(!open))
        history.push("/status")
    }


    const renderCartList = cart.map((cart) => {
        const { id, title, price } = cart;


        return (
            <div className="cart" key={id}>
                <div className="cart-content">
                    <div className="cart-item">
                        <div className="cart-upper">
                            <h3 className="cart-title"> {title} </h3>
                            <div className="cart-line"></div>
                            <p className="cart-amount"> 1</p>
                        </div>

                        <div className="cart-lower">
                            <p className="cart-price"> {price} kr</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    });

    //className={` cart-container ${isOpen ? "showCart" : ""}`}
    return (

        <div>

            <div className="wrapper">
                <button onClick={handleCartOpen} className="cart-button" >
                    <span > {amount} </span>
                    <img className="img" src={bag} alt="" />
                </button>
            </div>
            <div className={` cart-container ${open ? "showCart" : "hideCart"}`}>
                <div className={` cart-card ${open ? "showCart" : "hideCart"}`}>
                    <div className="upper-cart">
                        <h1 className="cart-header" >Din beställning</h1>
                        <div>{renderCartList}</div>

                    </div>


                    <div className="tesst">
                        <div className="total-n-btn">
                            <div className="cart-total">
                                <div className="total-upper">
                                    <h3>Total</h3>
                                    <div className="total-line"></div>
                                    <h3 className="total-price">{total} kr</h3>
                                </div>

                                <div className="total-lower">
                                    <p>inkl moms + drönarleverans</p>
                                </div>


                            </div>
                            <button className="checkout-button" onClick={handleClick}><span>Take my money!</span></button>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}


export default Cart;