import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Login.css";
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import { useNavigate } from "react-router-dom";


const Val = () => {
  const [values, setState] = useState({username: "", password:"",error:{ username:"", password:""}});
  const [fst, setFname] = useState("");
  const navigate = useNavigate();

  // console.log(location)

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = values.errors;

    setState({ ...values, errors, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://172.20.8.192:8000/userreadData?doc=all", {
                    method: "GET",
                })
                .then((response) => response.json())
                .then((data) => {
                    //console.log(data)

                    if (data.find(({
                            username
                        }) => username === values.username)) {
                        let logindata = data.find(({
                            username
                        }) => username === values.username)
                        let username = logindata.username;
                        let password = logindata.confirmpassword;
                        
                        if (username === values.username) {
                            if (password === values.password) {
                                window.localStorage.setItem('logindata', JSON.stringify(logindata));
                                window.location.href = "/home";
                                // navigate("/", { state: { values } })
                            } else {
                                console.log("Invalid Password")
                            }
                        } else {
                            console.log("Invalid Username")
                        }
                      }


                    // }
                })
                .catch((err) => {
                    console.log(err);
                });
  };

  function cancel() {
    // window.location.href = "/requirements";
  }

  const { errors } = values;

  return (
    <div className="grandParentContaniner">
      <div className="parentContainer">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <center>
          <h1>LOGIN HERE!</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute">
              <div className="container1">
                <center><AccountCircle style={{width: "70px", height:"70px"}} /></center><br></br>
                <label>
                  <b>Username :</b>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="username"
                  onChange={handleChange}
                ></input>
                <br></br><br></br>
                <label><b>Password :</b></label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="password"
                  onChange={handleChange}
                ></input>{" "}
                <br></br><br></br>
                {/* <input type="checkbox">Show Password</input> */}
                <button type="reset" className="canbtn">
                  Cancel
                </button>
                <button className="logbtn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Val;
