import './profile.css'
import profileImg from '../img/Profile.png'


function Profile() {


  return (
    <div className="profile">

        <div className="profile-content">
        <img className="profileImg" src={profileImg} alt="" />
        <h2> Sixte Kaffelöver </h2>
        <p>sixten.kaffelover@zocom.se</p>

        <div className="orderhistorik">
            <h2>Orderhistorik</h2>
            


        </div>
        </div>
    </div>
  );
};


export default Profile