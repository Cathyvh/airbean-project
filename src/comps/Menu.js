//import store from "../redux";
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { Link, } from 'react-router-dom';
import './menu.css'



export default function Menu() {
    const [isOpen, setOpen] = useState(false)

    // const [isCartOpen, setCartOpen] = useState(false)

    // const handleCartOpen = () =>{
    //   dispatch(openCart(open))
    // }


    const handleOpen = () => {
        setOpen(!isOpen);
    }

    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <div className="navBar">
            {/* <img className="headerImg" src={headerImg} alt="header" /> */}
            <div className="buttons">
                <div className={` hamburger ${isOpen ? "showMenu" : ""}`}>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        onClick={handleOpen}
                        size={24}
                        rounded
                        distance="lg"
                    />
                </div>
                <div className="wrapper">

                </div>
            </div>

            <div id="mobile-links" >
                <ul className={` menuNav ${isOpen ? "showMenu" : ""}`}>
                    <li>
                        <Link onClick={() => closeMenu()} to="/menu">Meny </Link>
                    </li>
                    <div id="menu-line"></div>
                    <li>
                        <Link onClick={() => closeMenu()} to="/about">Vårt kaffe </Link>
                    </li>
                    <div id="menu-line"></div>
                    <li>
                        <Link onClick={() => closeMenu()} to="/profile">Min profil </Link>
                    </li>
                    <div id="menu-line"></div>
                    <li>
                        <Link onClick={() => closeMenu()} to="/status">Orderstatus </Link>
                    </li>
                </ul>
            </div>
            {/* <div className={` cart-container ${isCartOpen ? "showCart" : ""}`}>
                    <Cart/>
            </div>  */}

        </div>

    )
}