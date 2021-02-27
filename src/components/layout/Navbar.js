import React from "react";
import { Link, withRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/Home">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/Signup">
              SignUp
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Signin">
              Signin
            </Link>
          </li>
          <Link className="btn btn-outline-info" to="/manipulation/add">
            Add New{" "}
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
