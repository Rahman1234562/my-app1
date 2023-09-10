import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                onClick={props.toggle}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label 
              className="form-check-label"
               htmlFor="flexSwitchCheckDefault"
               >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

//this propTypes is use which type of data you want to execute here string data is executed not other data
//allow to execute because you define the data type or propType
// Navbar.propTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string

// }

// another propstype bydefault exxecuted that you don't define the props data is empty or the props already
// take with name  can't change it
//here you can define by default e.g.

// Navbar.defaultProps = {
//     title: "Profile",
// }
