import drone from '../img/drone.png'
import './status.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Status() {
  const orderId = useSelector((state) => state.orderReducer.id)
  const orderEta = useSelector((state) => state.orderReducer.eta)
  return (
    <div className="status">
      <div className="status-content" >
        <p className="number">Ordernummer <strong>{orderId}</strong></p>
        <img className="drone" src={drone} alt="drone" />
        <h1>Din beställning är på väg!</h1>
        <h3 className="mins" > <strong>#{orderEta}</strong> minuter</h3>
        <button className="status-button"><Link className="link" to="/menu">Ok, cool!</Link></button>
      </div>
    </div>
  );
};


export default Status