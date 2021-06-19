import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
 import "./SideBar.css"
import { Link } from 'react-router-dom';
 import { userContext } from '../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    //  const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     fetch('https://morning-thicket-61908.herokuapp.com/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));

    // }, [])

    return (
        <div className="sidebar  d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            
            <ul className="list-unstyled ">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>DASHBOARD</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>

                    <li>
                        <Link to="/book" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookList" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Book list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                    {/* {isAdmin && <div> */}
                        <li>
                            <Link to="/orderList" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Admin</span>
                            </Link>
                        </li>
                        
                    {/* </div>} */}
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;