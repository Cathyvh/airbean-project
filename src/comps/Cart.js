import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './cart.css'
import { openCart } from "../redux/action"
import { setOrder } from "../redux/action"
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
    console.log(open.state, "test")
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

    //className={` cart-container ${isOpen ? "showCart" : ""}`}
    return (

        <div className="cart-container">
            <div className="wrapper">
                <button onClick={handleCartOpen} className="cart-button" >
                    <span > {amount} </span>
                    <img className="img" src={bag} alt="" />
                </button>
            </div>
            <div className={` cart-card ${open ? "showCart" : "hideCart"}`}>
                <h1 className="cart-header" >Din beställning</h1>
                <div>{renderCartList}</div>
                <div className="cart-total">
                    <h3>Total</h3> <h3>{total}</h3>
                    <p>inkl moms + drönarleverans</p>
                </div>
                <button onClick={handleClick}>Take my money!</button>
            </div>
        </div>

    )
}


export default Cart;