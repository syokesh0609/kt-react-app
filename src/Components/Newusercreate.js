import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css"
import { useNavigate } from "react-router-dom";

const Val = () => {
  const location = useLocation();
  const [values, setState] = useState({firstname:"", lastname:"", username:"", password:"", confirmpassword:"", email:"",role:"", title:"", phoneno:"", errors:{firstname: "",lastname:"", username:"", password:"",confirmpassword:""}});
  const [fst, setFname] = useState("");
  const navigate = useNavigate();

  // console.log(location)
  const passwordregex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = values.errors;

    switch (name) {
      case "firstname":
        errors.firstname = value.length > 4
          ? ""
          : "First Name must be at least 4 characters long!";
        setFname(event.target.value);
        break;
      case "lastname":
        errors.lastname = value.length > 4
          ? ""
          : "lastname must be minimum 4 characters!";
        break;
        case "username":
        errors.username = value.length > 4
          ? ""
          : "Username must be minimum 4 characters!";
        break;
        case "password":
        errors.password = passwordregex.test(value)
          ? ""
          : "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        break;
        case "confirmpassword":
        errors.confirmpassword = (values.password === values.confirmpassword)
          ? ""
          : "Password and confirmpassword must match!";
        break;

    //   case "altid":
    //     errors.altid =
    //       value.length < 2
    //         ? "Alt id length min 2 characters"
    //         : (errors.altid =
    //             sub_array.indexOf(value) > -1
    //               ? `Alt id Already exits! ${value}`
    //               : "");

    //     break;
      default:
        break;
    }

    setState({ ...values, errors, [name]: value });
  };

//   const validateForm = (errors) => {
//     let valid = true;
//     Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
//     return valid;
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (validateForm(errors)) {
      console.info("Valid Form");
      console.log(values)
      let queryString = JSON.stringify(values);
      fetch("http://172.20.8.192:8000/usercreateData", {
        method: "POST",
        body: queryString,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Created Data ", data);
          // history.pushState({}, null, "/Crud");
          // window.history.pushState('', 'Crud', '/Crud');
          window.location.href = "/administrator";
        //   navigate("/administrator")
        })
        .catch((err) => {
          console.error(err);
        });
    // } else {
    //   console.error("Invalid Form");
    //   console.log(values);
    // }
  };

  function cancel() {
    // window.location.href = "/administrator";
    navigate("/administrator")
  }

  const { errors } = values;

  return (
    <div className="App2">
      <form className="formfield" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1>
            <i>Add User details</i>
          </h1>
        </div>
        <div>
          <div className="horizontal-group">
            <div className="form-group left">
              <label>
                <b>First Name:</b>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter First Name"
                onChange={handleChange}
                required
              ></input>
              
            </div>
            <div className="form-group right">
              <label>
                <b>Last Name:</b>
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter Last Name"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>

          <div className="horizontal-group">
            <div className="form-group left">
            {errors.firstname.length > 0 && (
            <span className="error">{errors.firstname}</span>
          )}

            </div>
            <div className="form-group right">
            {errors.lastname.length > 0 && (
            <span className="error">{errors.lastname}</span>
          )}

            </div>

          </div>

          <div className="horizontal-group">
            <label>
              <b>User Name:</b>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter User Name"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="horizontal-group">
    
            
            {errors.username.length > 0 && (
            <span className="error">{errors.username}</span>
          )}

            

          </div>
          <div className="horizontal-group">
            <div className="form-group left">
              <label><b>Password:</b></label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group right">
              <label>
                <b>Confirm Password:</b>
              </label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Re-enter password"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="horizontal-group">
            <div className="form-group left">
            {errors.password.length > 0 && (
            <span className="error">{errors.password}</span>
          )}

            </div>
            <div className="form-group right">
            {errors.confirmpassword.length > 0 && (
            <span className="error">{errors.confirmpassword}</span>
          )}

            </div>

          </div>
          <div className="horizontal-group">
            <label>
              <b>Email:</b>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@xyz.com"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="horizontal-group">
            <div className="form-group left">
              <label>
                <b>Select Role:</b>
              </label>
              <select name="role" onChange={handleChange} required>
                <option value="Tester">Tester</option>
                <option value="Administrator">Administrator</option>
                <option value="Testing Manager">Testing Manager</option>
                <option value="Project Lead">Project Lead</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="form-group right">
              <label>
                <b>Title</b>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title about you"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div><br></br>

          <div className="horizontal-group">
            <label>
              <b>Phone No:</b>
            </label>
            <input
              type="number"
              name="phoneno"
              placeholder="10-digit phone number"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="horizontal-group">
            <div className="form-group right">
              <button type="reset" className="btn1" onClick={cancel}>
                Cancel
              </button>
              <button className="btn" id="Save">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Val;
