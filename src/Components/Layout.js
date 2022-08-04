import { Outlet, Link, Navigate } from "react-router-dom";
import "./Layout.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import Modal from "react-modal";
// import "./Layout.css"
import { FaLock, FaSignInAlt, FaUserLock } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "5%",
    left: "auto",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    padding: "10px",
    // transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 200,
    height: 280,
  },
};

const Layout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginuser, setLogdata] = useState("");
  const [loginusername, setLoginuser] = useState("");
  const [loginuserrole, setLoginuserrole] = useState("");
  const [disable_button, setDisable] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //  console.log(loginuser)

  function logout() {
    window.location.href = "/login";
  }

  function administrator() {
    window.location.href = "/administrator";
    // navigate("/administrator")
    // setModalOpen(false)
  }

  function profile() {
    setModalOpen(true);

    let logindata = JSON.parse(window.localStorage.getItem("logindata"));
    console.log(logindata);

    let username = logindata.username;
    let role = logindata.role;
    setLoginuser(username);
    setLoginuserrole(role);
    if (role === "Administrator") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  return (
    <>
      <div className="header">
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
        >
          <center>
            <h2>{loginusername}</h2>
          </center>
          <center>
            <p className="administrator">( {loginuserrole} )</p>
          </center>
          <div className="profileview">
            <button
              className="admini"
              onClick={administrator}
              disabled={disable_button}
            >
              <FaUserLock style={{ marginRight: "10px" }} />
              Administrator
            </button>
            <div className="changepass">
              <FaLock style={{ marginRight: "10px" }} />
              Change Password
            </div>
            <div className="logout" onClick={logout}>
              <FaSignInAlt style={{ marginRight: "10px" }} />
              Log Out
            </div>
          </div>
        </Modal>
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

          <Link to="/repository" className="table">
            Repository
          </Link>

          <Link to="/treeview" className="table">
            TreeView
          </Link>

          {/* <Link to="/testaction" className="table">
            Test
          </Link> */}

          <AccountCircle
            onClick={profile}
            style={{
              width: "35px",
              height: "35px",
              margin: "5px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
