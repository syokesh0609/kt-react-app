import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Val = () => {
  const location = useLocation();
  let docId = location.state.id;
  let Createrequirement_name = location.state.Rows[0];
  let Createrequirement_id = location.state.Rows[1];
  let Createpriority = location.state.Rows[2];
  let Createaltid = location.state.Rows[3];
  let Createdescription = location.state.Rows[5];

  //   console.log(location)
  // const [values, setState] = useState({ fullName: null,
  //     email: null,
  //     password: null,});
  const [values, setState] = useState({
    fullName: Createrequirement_name,
    altid: Createaltid,
    requireid: Createrequirement_id,
    priority: Createpriority,
    description: Createdescription,

    errors: {
      fullName: "",
      altid: "",
      description: "",
    },
  });
  const [fst, setFname] = useState("");

  // console.log(location)

  const sub_array = [];
  fetch("http://172.20.8.192:8000/getData?doc=all", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        sub_array.push(data[i].alt_id);
        // super_array.push(...sub_array.slice(0));
      }
    })
    .catch((err) => {
      console.log(err);
    });

  const validnameRegex = RegExp(/^[A-Za-z\s]{4,20}$/);
  const validdescriptionRegex = RegExp(/^[A-Za-z.-_\s]{20,}$/);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = values.errors;

    switch (name) {
      case "fullName":
        errors.fullName = validnameRegex.test(value)
          ? ""
          : "Requirement Name must be at least 4 to max 20 characters long!";
        setFname(event.target.value);
        break;
      case "description":
        errors.description = validdescriptionRegex.test(value)
          ? ""
          : "Description must be minimum 20 characters!";
        break;

      case "altid":
        errors.altid =
          value.length < 2
            ? "Alt id length min 2 characters"
            : (errors.altid =
                sub_array.indexOf(value) > -1
                  ? `Alt id Already exits! ${value}`
                  : "");

        break;
      default:
        break;
    }

    setState({ ...values, errors, [name]: value });
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info("Valid Form");

      let query = {
        DocId: docId,
        requirement_name: values.fullName,
        requirement_id: values.requireid,
        priority: values.priority,
        alt_id: values.altid,
        created_by: "admin",
        description: values.description,
      };
      //   // setUdata(a);
      console.log(query);
      console.log(values);
      console.log(fst);
      //   console.log(value)

      let queryString = JSON.stringify(query);
      fetch("http://172.20.8.192:8000/updateData", {
        method: "PATCH",
        body: queryString,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("Invalid Form");
      console.log(values);
    }
  };

  function cancel() {
    window.location.href = "/requirements";
  }

  const { errors } = values;

  return (
    <div className="App">
      <form className="formfield" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1>
            <i>Update#</i>
          </h1>
        </div>
        <div>
          <label for="requuirement_name">
            <b>Requirement Name</b>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter requirement name here"
            onChange={handleChange}
            value={values.fullName}
            required
          ></input>
          {errors.fullName.length > 0 && (
            <span className="error">{errors.fullName}</span>
          )}

          <label for="requuirement_details">
            <b>Requirement Details:</b>
          </label>

          <div className="container">
            <div className="horizontal-group">
              <div className="form-group left">
                <label for="requuirement_id">Requirement ID</label>
                <input
                  type="text"
                  name="requireid"
                  placeholder="Enter requirement ID here"
                  onChange={handleChange}
                  value={values.requireid}
                  required
                ></input>
              </div>
              <div className="form-group right">
                <label for="priority">Priority</label>
                <select
                  name="priority"
                  value={values.priority}
                  onChange={handleChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div className="horizontal-group">
              <div className="form-group left">
                <label for="Alt_id">Alt ID</label>
                <input
                  type="text"
                  name="altid"
                  value={values.altid}
                  placeholder="Enter requirement Alt id here"
                  onChange={handleChange}
                  required
                ></input>
                {errors.altid.length > 0 && (
                  <span className="error">{errors.altid}</span>
                )}
              </div>
              <div className="form-group right">
                <label for="Created">Created By</label>
                <input
                  type="text"
                  value="admin"
                  name="admin"
                  onChange={handleChange}
                  disabled
                  required
                ></input>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <label for="description">
            <b>Description</b>
          </label>
          <br></br>
          <textarea
            type="text"
            className="description"
            name="description"
            placeholder="Write description"
            value={values.description}
            onChange={handleChange}
            // required
          ></textarea>
          {errors.description.length > 0 && (
            <span className="error">{errors.description}</span>
          )}
          <br></br>
          <br></br>

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
