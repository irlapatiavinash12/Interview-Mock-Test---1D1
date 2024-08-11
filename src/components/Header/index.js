import './index.css'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

const Header = props => {
  const onLogout = () => {
    console.log('logout triggered')
    const {history} = props
    console.log(history)
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <nav className="header-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
      <button type="button" className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
