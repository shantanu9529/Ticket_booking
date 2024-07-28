import React from "react";
import { ReactDOM } from "react-dom";
import {Link} from "react-router-dom";


function Navigation() {
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="collapse navbar-collapse px-3" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <Link class="nav-link fs-5" to={"/Header"}>Header </Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link text-white fs-5" to={"/Homepage"}>Home | </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white fs-5" to={"/Login"}>Login | </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white fs-5" to={"/Registration"}>Registration | </Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Navigation;
