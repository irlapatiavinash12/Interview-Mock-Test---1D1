import './index.css'

import Header from '../Header'

const Home = () => {
  return(
    <div className="home-main-container">
      <Header />
      <div className="card-container">
        <h1 className="home-title">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="card-image"
        />
      </div>
    </div>
  )
}

export default Home
