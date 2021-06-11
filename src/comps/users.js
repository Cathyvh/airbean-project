// import { useEffect, React } from "react";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";

// import './coffeeComp.css'
// import { setUsers } from "../redux/action";

// function UserList() {

//   const users = useSelector((state) => state.userReducer.users);
//   const dispatch = useDispatch();


//   const fetchUsers = async () => {
//     const response = await axios
//       .get("http://localhost:5000/api/accounts")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setUsers(response));
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

// console.log(users)

//   return (
//     <div className="container">
//       <h1>Meny</h1>
//     </div>
//   );
// }

// export default UserList;