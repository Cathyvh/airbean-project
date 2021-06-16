import './profile.css'
import profileImg from '../img/Profile.png'
import { React } from "react";
import { useSelector } from "react-redux";
import OrderList from './orderList';



function Profile() {
    const user = useSelector((state) => state.currentUserReducer.currentUser)
    const orderTotal = useSelector((state) => state.orderReducer.orderTotal)

    return (
        <div className="profile">
            <div className="profile-content">
                <img className="profileImg" src={profileImg} alt="" />
                <h2> {user.userName} </h2>
                <div className="orderhistorik">
                    <h2>Orderhistorik</h2>
                    <div>
                        <OrderList />
                    </div>
                    <p>totalt spenderat: {orderTotal}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile