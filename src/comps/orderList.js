import './profile.css'
import { useEffect, React, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from '../utils/api';
import { _ } from 'lodash'



function OrderList() {
    const user = useSelector((state) => state.currentUserReducer.currentUser)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const orderData = await getOrders(user.id);
            //const orderTotal = getOrders.total.reduce(function(value){return value})
            //const orderTotal = _.sumBy(orders, )
            console.log("orderData:", orderData)
            setOrders(orderData)
        }
        fetchData();

    }, [user.id])

    const renderOrder = orders.map((order) => {

        return (
            <div>
                <li>{order.id}</li>
                <li>{order.total}</li>
                <li>{order.date}</li>
            </div>

        );
    })

    if (orders.length > 0) {
        return (
            <div className="orderhistorik">
                <ul>
                    {renderOrder}
                </ul>
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