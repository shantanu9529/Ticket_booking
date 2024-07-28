import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation";
import "./App.css";
import { ReactDOM } from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Head/Header";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Homepage from "./Components/Homepage/Homepage";
import All_users from "./admin/sidebar/All_users";
import All_movies from "./admin/sidebar/All_movies";
import Sidebar from "./admin/sidebar/Sidebar";
import Loginn from "./admin/authentication/Loginn";
import Dashboard from "./admin/Dashboard/Dashboard";
import All_bookings from "./admin/sidebar/All_bookings";
import Add_movies from "./admin/sidebar/Add_movies";
import Book_ticket from "./admin/sidebar/Book_ticket";
import UserDashboard from "./Components/Dashboard/Dashboard";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserSidebar from "./Components/Sidebar/Sidebar";
import AdminProfile from "./admin/admin_profile/AdminProfile";
import User_movies from "./Components/user_all_movies/User_movies";
import Ticket_save from "./Components/ticket_save/Ticket_save";
import User_booking from "./Components/user_booking/User_booking";


function App() {
  return (
    <div>
    
      <Router>
      <Routes>
       <Route path="/" Component={Homepage}/>
       <Route path="/homepage" Component={Homepage}/>
        <Route path="/header" Component={Header}/>
        <Route path="/login" Component={Login}/>
        <Route path="/loginn" Component={Loginn}/>
        <Route path="/registration" Component={Registration}/>
        <Route path="/all_users" Component={All_users}/>
        <Route path="/all_movies" Component={All_movies}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/sidebar" Component={Sidebar}/>
        <Route path="/all_bookings" Component={All_bookings}/>
        <Route path="/add_movies" Component={Add_movies}/>
        <Route path="/book_ticket" Component={Book_ticket}/>
        <Route path="/user_dashboard" Component={UserDashboard}/>
        <Route path="/user_profile" Component={UserProfile}/>
        <Route path="/user_sidebar" Component={UserSidebar}/>
        <Route path="/admin_profile" Component={AdminProfile}/>
        <Route path="/user_movies" Component={User_movies}/>
        <Route path="/ticket_save" Component={Ticket_save}/>
        <Route path="/user_booking" Component={User_booking}/>
      </Routes>
    </Router>

    </div>

  );
}

export default App;
