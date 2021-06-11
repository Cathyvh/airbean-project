

import React from 'react'
import { Field, reduxForm } from 'redux-form'

async function postLogin(data){
    try{
        let response = await fetch ('http://localhost:5000/api/accounts', {
            method: 'POST',
            headers:{ 
                'Content-type': 'applicatipn/json'
            },
            body: JSON.stringify(data)
        })
        let responseJSON = await response.json()
        return responseJSON
        } catch(error) {
        console.log(error)
    }
}


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
    if(passWord.trim()===''){
        error.userName='Required'
        isError = true
    }

        if(passWord.length < 6){
        error.userName='Too short'
        isError = true
    }else {
        
        postLogin({userName, passWord})
        .then(data => console.log(data))
    }
}


const LoginFormFunc = ({handleSubmit}) =>{
    

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
      <button type="submit">Submit</button>
    </form>
    )

}


const LoginForm = reduxForm({
  // a unique name for the form
  form: 'Login1'
})(LoginFormFunc)


export default LoginForm



// import React from 'react'
// import { Field, reduxForm } from 'redux-form'


// const postLogin = ()  =>{
// async function postLogin(data){
//     try{
//         let response = await fetch ('http://localhost:5000/api/accounts', {
//             method: 'POST',
//             headers:{ 
//                 'Content-type': 'applicatipn/json'
//             },
//             body: JSON.stringify(data)
//         })
//         let responseJSON = await response.json()
//         return responseJSON
//         } catch(error) {
//         console.log(error)
//     }
// }
// }

// const LoginForm = ({handleSubmit}) =>(
    
//     <form onSubmit={ handleSubmit}>
//       <div>
//         <label htmlFor="userName">First Name</label>
//         <Field name="userName" component="input" type="text" />
//       </div>
//       <div>
//         <label htmlFor="passWord">Last Name</label>
//         <Field name="passWord" component="input" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
  




//  LoginForm = reduxForm({
//   // a unique name for the form
//   form: 'Login'
// })(LoginForm)



  