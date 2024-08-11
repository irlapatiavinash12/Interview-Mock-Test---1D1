import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from "react-router-dom"

class LoginForm extends Component {
  state = {
    userId: '',
    password: '',
    errorMsg: '',
    isShowErrorMsg: false,
  }

  renderInput = event => {
    this.setState({userId: event.target.value})
  }

  renderPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMsg => {
    this.setState({isShowErrorMsg: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3, path: '/'})
    history.replace('/')
  }

  renderInputField = () => {
    const {userId} = this.state
    return (
      <>
        <label className="label-styling" htmlFor="userid">
          USER ID
        </label>
        <input
          type="text"
          className="input-field"
          id="userid"
          value={userId}
          placeholder="Enter User ID"
          onChange={this.renderInput}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-styling" htmlFor="pin">
          PIN
        </label>
        <input
          type="password"
          className="input-field"
          id="pin"
          value={password}
          placeholder="Enter PIN"
          onChange={this.renderPassword}
        />
      </>
    )
  }

  renderLogin = async event => {
    event.preventDefault()
    const {userId, password} = this.state
    const userDetails = {user_id: userId, pin: password}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      console.log('success')
      this.onSubmitSuccess(data.jwt_token)
    } else {
      console.log('failure')
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {isShowErrorMsg, errorMsg} = this.state
    const token = Cookies.get("jwt_token")
    if (token !== undefined){
      return (<Redirect to="/"/>)
    }
    return (
      <div className="Login-main-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="login-container">
            <h1 className="Login-title">Welcome Back!</h1>
            <form className="form-container" onSubmit={this.renderLogin}>
              <div className="input-container">{this.renderInputField()}</div>
              <div className="input-container">
                {this.renderPasswordField()}
              </div>
              <button type="submit" className="button-styling">
                Login
              </button>
              {isShowErrorMsg && <p className="error-msg">{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
