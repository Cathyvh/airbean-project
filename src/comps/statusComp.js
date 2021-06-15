import drone from '../img/drone.png'
import './status.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Status() {
  const order = useSelector((state) => state.orderReducer.orders)
  return (
    <div className="status">
      <div className="status-content" >
        <p className="number">Ordernummer <strong>{order.id}</strong></p>
        <img className="drone" src={drone} alt="drone" />
        <h1>Din beställning är på väg!</h1>
        <h3 className="mins" > <strong>{order.eta}</strong> minuter</h3>
        <button className="status-button"><Link className="link" to="/">Ok, cool!</Link></button>
      </div>
    </div>
  );
};


export default Status