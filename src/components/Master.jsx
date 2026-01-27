import { Link, Outlet } from "react-router-dom";
import "./styles.css";

function Master() {
  // store once
  localStorage.setItem("course", "CSE");

  return (
    <>
      {/* NAVIGATION */}
      <div className="head">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* CONTENT CHANGES HERE */}
      <Outlet />
    </>
  );
}

export default Master;