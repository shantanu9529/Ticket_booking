import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactDOM } from "react-dom";
import {Link} from "react-router-dom";
import "./Sidebar.css";

function Sidebar(){

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
          <Link to="/admin_profile">Profile</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/all_users">All Users</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/all_movies">All Movies</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/all_bookings">All bookings</Link>
        </li><hr/>
        <li className="fs-5">
          <Link to="/logout">Logout</Link>
        </li><hr/>
      </ul>
    </div> 
        </div>
    );

}
export default Sidebar;
