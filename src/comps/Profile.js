import './profile.css'
import profileImg from '../img/Profile.png'
import { React } from "react";
import { useSelector } from "react-redux";
import OrderList from './orderList';
import Navbar from './Navbar';


function Profile() {
    const user = useSelector((state) => state.currentUserReducer.currentUser)
    const orderTotal = useSelector((state) => state.orderReducer.orderTotal)

    return (
        <div className="profile">
            <Navbar />
            <div className="profile-content">
                <img className="profileImg" src={profileImg} alt="" />
                <h2> {user.userName} </h2>
                <div className="order-history">
                    <h2>Orderhistorik</h2>
                    <div className="order-container">
                        <OrderList />
                    </div>
                    <div className="order-total">
                        <p><strong>Totalt spenderat</strong> </p>
                        <p className="ordertotal-comp"> <strong>{orderTotal} kr</strong> </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile