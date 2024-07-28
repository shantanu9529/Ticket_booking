import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactDOM} from "react-dom";
import {Link} from "react-router-dom";
import "./Sidebar.css";
import {useNavigate} from 'react-router-dom';
import SessionData from '../SessionData/SessionData';

function Sidebar(){

  const navigate = useNavigate();
  const logout = () => {
    SessionData.setId("");
    navigate('/login');
    // const logout = () =>
    //   {
    //   navigate('/login');
    //  }
  }

    return(
        <div>
          <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
       <ul className="list-unstyled components">
        <p></p>
        {/* <li className="fs-5 ">
          <Link to="/Dashboard">Dashboard</Link>
        </li><hr/> */}
        <li className="fs-5">
          <Link to="/user_profile">Profile</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/user_movies">All Movies</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/book_ticket">Book Movies</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/user_booking">Orders</Link>
        </li><hr/>
        <li className="fs-5">
          <Link onClick={logout}>Logout</Link>
        </li><hr/>
      </ul>
    </div> 
        </div>
    );

}
export default Sidebar;
