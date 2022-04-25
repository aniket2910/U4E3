import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Home } from "./Home";

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {token === "" ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link onClick={handleLogout} to="/logout">
            Logout
          </Link>
        )}
        <Link to="/books">Books</Link>
      </nav>
    </>
  );
};
