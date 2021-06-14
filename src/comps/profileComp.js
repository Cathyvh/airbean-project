import './profile.css'
import profileImg from '../img/Profile.png'
import { useEffect, React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './coffeeComp.css'
import { getOrders } from '../utils/api';



function Profile() {
  const user = useSelector((state) => state.currentUserReducer.currentUser)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const orderData = await getOrders(user.id);
      console.log(orderData)
      setOrders(orderData)
    }
    fetchData();

  }, [user.id])
  //map orders to component list (31)
  return (
    <div className="profile">
      <div className="profile-content">
        <img className="profileImg" src={profileImg} alt="" />
        <h2> {user.userName} </h2>
        <div className="orderhistorik">
          <h2>Orderhistorik</h2>

        </div>
      </div>
    </div>
  );
};


export default Profile