import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
