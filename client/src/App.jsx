import React from 'react'
import { Route, Switch } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import CustomNavbar from './components/CustomNavbar/CustomNavbar2'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Admin from './components/Admin/Admin'
import Footer from './components/Footer/Footer'
import Login from './components/Account/Login'
import AdminLogin from './components/Account/LoginAdmin'
import Register from './components/Account/Register'
import AdminRegister from './components/Account/RegisterAdmin'

import './App.scss'


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/AdminLogin" component={AdminLogin} />
          <Route exact path="/AdminRegister" component={AdminRegister} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
