import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { thisUser, setUsers} from "../redux/action";
import {useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useHistory  } from 'react-router-dom';


async function postLogin(data){
    try{
        let response = await fetch ('http://localhost:5000/api/accounts', {
            method: 'POST',
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
      },
            body: JSON.stringify(data)
        })
        let responseJSON = await response.json()
        return responseJSON
        } catch(error) {
        console.log(error)
    }
}
// const dispatch = useDispatch();
// const fetchUsers = async () => {
   
//     const response = await axios
//       .get("http://localhost:5000/api/accounts/")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//       console.log(response)
//       dispatch(setUsers(response.data));
//   };

//       useEffect(() => {
//     fetchUsers();
//   }, []);



const LoginFormFunc = ({handleSubmit}) =>{

    const dispatch = useDispatch();
    const history = useHistory()
    const submit = ({userName='', passWord=''}) =>{
        
        let error = {}
        let isError = false
    if(userName.trim()===''){
        error.userName='Required'
        isError = true
    }
    if(userName.length > 20){
        error.userName='Too long'
        isError = true
    }
    if( passWord.trim()===''){
        error.userName='Required'
        isError = true
    }

        if(passWord.length < 6){
        error.userName='Too short'
        isError = true
    }else {
  
        
        postLogin({userName, passWord})
        .then(data => console.log(data))
        .then(resp => {
            dispatch(thisUser({userName, passWord}));
        })
        .then (response=>{
            history.push("/profile");
        })
        
    }
}
   

    return(
        <form onSubmit={ handleSubmit(submit)}>
        <div>
            <label htmlFor="userName">First Name</label>
            <Field name="userName" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="passWord">Last Name</label>
            <Field name="passWord" component="input" type="text" />
        </div>
       <button  type="submit"> </button>
        </form>
    )
//

}


const LoginForm = reduxForm({

  form: 'Login',
  fields: ['userName', 'passWord']
})(LoginFormFunc)

// onst selector = formValueSelector('Login')c

// LoginForm = connect(
//   state => {
//     const userName = selector(state, 'userName')
    
//     return {
//         userName
//     }
//   }
// )(LoginForm)



export default LoginForm
