import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { setUser } from "../redux/action";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { postLogin } from '../utils/api'
import airbeanImg from '../img/airbean.svg'
import Navbar from './Navbar';
import './login.css'

const LoginForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const submit = async ({ userName = '', password = '', gdpr = false }) => {
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
    if (gdpr === false) {
      error.userName = 'No gpdpr'
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
    <div className="login-background">
      <Navbar />
      <div className="login-card">
        <div className="login-text">
          <img className="login-img" src={airbeanImg} alt="" />
          <h1>Välkommen till Airbean-familjen!</h1>
          <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <div className="username">
            <label className="label" htmlFor="userName">Användarnamn</label>
            <Field className="input" name="userName" component="input" type="text" />
          </div>
          <div className="password">
            <label className="label" htmlFor="password">Lösenord</label>
            <Field className="input" name="password" component="input" type="text" />
          </div>
          <div className="gdpr">
            <Field className="check" name="gdpr" component="input" type="checkbox" />
            <label className="label" htmlFor="gdpr">GDPR Ok!</label>
          </div>
          <button className="login-button" type="submit"> <span>Logga in</span> </button>
        </form>
      </div>
    </div>

  )
}

const Login = reduxForm({
  form: 'Login',
  fields: ['userName', 'password']
})(LoginForm)

export default Login
