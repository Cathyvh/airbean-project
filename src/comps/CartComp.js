import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './cart.css'
import { openCart } from "../redux/action"
import { addOrder } from "../redux/action"
import bag from '../img/bag.svg'


const Cart = () => {
    const cart = useSelector((state) => state.addProduct.items)
    const total = useSelector((state) => state.addProduct.total)
    const open = useSelector((state) => state.openCart.open)
    const amount = useSelector((state) => state.addProduct.items.length)
    const dispatch = useDispatch();
    console.log(open.state, "test")

    async function postOrder(data) {
        try {
            let response = await fetch('http://localhost:5000/api/order', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            let responseJSON = await response.json()
            return responseJSON
        } catch (error) {
            console.log(error)
        }
    }

    const handleCartOpen = () => {
        dispatch(openCart(open))
    }
    const handleClick = () => {
        postOrder({ cart })
            .then(data => console.log(data))
        dispatch(addOrder(cart))
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