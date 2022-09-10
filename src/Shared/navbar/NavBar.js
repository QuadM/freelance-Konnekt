import React from "react";
import { Routes } from "./../../Global/Routes";
import { Link } from "react-router-dom";
import "./style.css";
//import logo from "../../logo.svg";

const NavBar = ({ currentPath, setPath }) => {
  return (
    <div
      className=" black-nav-background"
      style={{ width: "100%", position: "sticky", top: 0, zIndex: 3 }}
    >
      <div className="nav-container black-nav-background">
        <div className="logo">Konnekt Logo</div>

        <div className="routes-container">
          {Routes.map((route, index) => {
            return route.route && route.route.length !== 0 ? (
              <Link
                key={index}
                to={route.path}
                className={
                  "Link " + (route.path === currentPath ? "link-focus" : "")
                }
                onClick={() => setPath(route.path)}
              >
                {route.route}
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
