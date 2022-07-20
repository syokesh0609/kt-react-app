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

          <Link to="/Apicalendar" className="calendar">
            Calendar
          </Link>

          <Link to="/table" className="table">
            Table
          </Link>

          <Link to="/requirements" className="table">
            Requirements
          </Link>

          <Link to="/treeview" className="table">
            TreeView
          </Link>

          {/* <Link to="/validate" className="table">
            validate
          </Link> */}

          {/* <Link to="/UpdateForm" className="table">
            Update_Form
          </Link> */}

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
