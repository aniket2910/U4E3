import react, { useEffect } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { About } from "../pages/About";
import { BookCard } from "../pages/BookCard";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { RequiredAuth } from "./RequiredAuth";
import { SingleBook } from "../pages/SingleBook";

const Mainroutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="books"
          element={
            <RequiredAuth>
              <Books />
            </RequiredAuth>
          }
        />
        <Route path="/books/:id" element={<SingleBook />}></Route>
        <Route path="/books/:id/edit" element={<EditBookData />}></Route>
        <Route path="/logout" element={<Logout />} />
        {/* keep all the routes here  */}
        {/* /books/* route need to be protected */}
      </Routes>
    </>
  );
};
export default Mainroutes;
