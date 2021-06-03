import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

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




export const UserContext = createContext();




function App() {
  const [loggedInUser,setLoggedInUser]=useState({});

  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/About" component={About}>
            <About></About>
          </Route>
          <PrivateRoute path="/Login">
          <Login></Login>
        </PrivateRoute> 
          
           
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
