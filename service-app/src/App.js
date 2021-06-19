import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NavBar from "./Components/Navbar/NavBar";

import PrivetRoute from "../src/Components/PrivateRoute/PrivateRoute";
import About from "./Components/About/About";
import { createContext, useState } from "react";
import Dashboard from "./Components/DashBoard/Dashboard";




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
  
} from "react-router-dom";
import Review from "./Components/SideBarComponents/AddReview";
import OrderList from "./Components/SideBarComponents/OrderList";
import Booklist from "./Components/SideBarComponents/Booklist";
import Book from "./Components/SideBarComponents/Book";
import Admin from "./Components/SideBarComponents/Admin";
import AddService from "./Components/SideBarComponents/AddService";
// import Sidebar from "./Components/DashBoard/Sidebar";




export const userContext = createContext()
export const UserOrder = createContext()


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const [order, setOrder] = useState({})
  

  return (
    <userContext.Provider value ={[loggedInUser,setLoggedInUser]}>
      <UserOrder.Provider value={[order, setOrder]}>
    <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/AddService">
              <AddService></AddService>
            </Route>
            <Route path="/Admin">
              <Admin></Admin>
            </Route>
            <PrivetRoute path="/Book">
              <Book></Book>
            </PrivetRoute>
            <PrivetRoute path="/Book/:id">
              <Book></Book>
            </PrivetRoute>
            <Route path="/BookList">
              <Booklist></Booklist>
            </Route>
            <Route path="/OrderList">
              <OrderList></OrderList>
            </Route>
            <Route path="/Review">
              <Review></Review>
            </Route>
                         
          </Switch>
        </Router>
        </UserOrder.Provider>
    </userContext.Provider>
  );
}

export default App;
