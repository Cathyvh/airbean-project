import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { setUser } from "../redux/action";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { postLogin } from '../utils/api'

const LoginForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const submit = async ({ userName = '', password = '' }) => {
    let error = {}
    let isError = false //todo: handle seperate errors
    if (userName.trim() === '') {
      error.userName = 'Required'
      isError = true
    }
    if (userName.length > 20) {
      error.userName = 'Too long'
      isError = true
    }
    if (password.trim() === '') {
      error.userName = 'Required'
      isError = true
    }
    if (password.length < 6) {
      error.userName = 'Too short'
      isError = true
    }

    if (!isError) {
      const account = await postLogin({ userName, password })
      console.log(account)
      dispatch(setUser(account))
      history.push("/profile")
    } else {
      //error message
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="userName">First Name</label>
        <Field name="userName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Last Name</label>
        <Field name="password" component="input" type="text" />
      </div>
      <button type="submit"> </button>
    </form>
  )
}

const Login = reduxForm({
  form: 'Login',
  fields: ['userName', 'password']
})(LoginForm)

export default Login
