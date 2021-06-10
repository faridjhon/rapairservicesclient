import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
  
} from "react-router-dom";

import About from "./Components/About/About";
import { createContext, useState } from "react";


export const userContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});

  return (
    <userContext.Provider value ={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          
          <PrivateRoute path="/Login">
          <Login></Login>
        </PrivateRoute> 
          
           
        </Switch>
      
    </Router>
    </userContext.Provider>
  );
}

export default App;
