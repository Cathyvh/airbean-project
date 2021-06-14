import './profile.css'
import profileImg from '../img/Profile.png'
import { useEffect, React } from "react";
import axios from "axios";
import { useSelector, useDispatch, connect } from "react-redux";
import './coffeeComp.css'
import { setUsers, addId } from "../redux/action";
import {formValueSelector} from 'redux-form';
import LoginForm from './loginform';




function Profile() {
  const user = useSelector((state) => state.currentUserReducer.currentUser.userName)
  const userdb = useSelector((state) => state.userReducer.userDatabase)
  const dispatch = useDispatch();
  
const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/accounts/")
      console.log(response)
      dispatch(setUsers(response.data));
      
      
    } catch (err) {
      console.log("Err: ", err);
    }
  };

  useEffect (() => {
  fetchUsers();

  }, [])

      console.log("user", userdb)
      
    const match  = userdb.find(userdb => userdb.userName === user); 
    console.log("match" , match)
  
  // function getID(){
  // console.log("user", userdb)
  // const match  = userdb.find(userdb => userdb.userName === user); 
  // return(
  //     console.log("match" , match)

  // )
  // }


 // dispatch(addId(match.accountId));
        
 

  return (
    <div className="profile">
         
        <div className="profile-content">
        <img className="profileImg" src={profileImg} alt="" />
        <h2> {user} </h2>
        <div className="orderhistorik">
            <h2>Orderhistorik</h2>
        </div>
        </div>
    </div>
  );
};


export default Profile