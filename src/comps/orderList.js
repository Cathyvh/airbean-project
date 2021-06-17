import './profile.css'
import { useEffect, React, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from '../utils/api';
import { _ } from 'lodash'
import "./orderlist.css"


function OrderList() {
    const user = useSelector((state) => state.currentUserReducer.currentUser)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const orderData = await getOrders(user.id);
            console.log("orderData:", orderData)
            setOrders(orderData)
        }
        fetchData();

    }, [user.id])

    const renderOrder = orders.map((order) => {

        return (
            <div className="order-item" >
                <div className="order-content">
                    <div className="order-id">
                        <p id="left" className="id"> #{order.id} </p>
                        <p id="left" className="order-sum-text"> total ordersumma</p>
                    </div>
                    <div className="orde-total-date">
                        <p id="right" className="date"> {order.date} </p>
                        <p id="right" className="total"> {order.total} kr </p>
                    </div>
                </div>
                <div className="order-line"></div>

            </div>



        );
    })

    if (orders.length > 0) {
        return (
            <div className="orderhistorik">
                {renderOrder}
            </div>
        );
    } else {
        return (
            <div className="orderhistorik">
                <h3>Inga beställningar lagda</h3>
            </div>
        );
    }

}

export default OrderList