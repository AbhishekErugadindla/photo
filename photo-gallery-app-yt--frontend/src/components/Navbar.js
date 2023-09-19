import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ token, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav__logo">Photo Gallery App</div>
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!token ? (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogoutClick}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
