import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="header">
        <div className="header-right">
          <Link to="/home" className="home">
            Home
          </Link>

          <Link to="/user" className="user">
            User
          </Link>

          <Link to="/contact" className="contact">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
