import React from "react";

const validnameRegex = RegExp(/^[A-Za-z\s]{4,20}$/);
const validdescriptionRegex = RegExp(/^[A-Za-z.-_\s]{20,}$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

function cancel() {
  window.location.href = "/requirements";
}

const sub_array = [];
fetch("http://172.20.8.192:8000/requirementreadData?doc=all", {
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

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      requireid: null,
      priority: null,
      altid: null,
      admin: "admin",
      description: null,

      errors: {
        fullName: "",
        description: "",
        altid: "",
        requireid: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    // for (let i = 0; i < 5; i++) {
    // sub_array.push(data[i].alt_id);
    // // super_array.push(...sub_array.slice(0));
    // }

    switch (name) {
      case "fullName":
        errors.fullName = validnameRegex.test(value)
          ? ""
          : "Requirement Name must be at least 4 to max 20 characters long!";
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

    this.setState({ errors, [name]: value });
    // }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      console.log(this.state.altid);
      console.log(this.state.fullName);
      let a = {
        requirement_name: this.state.fullName,
        requirement_id: this.state.requireid,
        priority: this.state.priority,
        alt_id: this.state.altid,
        created_by: "admin",
        description: this.state.description,
      };
      // setUdata(a);
      // console.log(Userdata);
      let queryString = JSON.stringify(a);
      fetch("http://172.20.8.192:8000/requirementcreateData", {
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
          window.location.href = "/requirements";
          // navigate("/Crud")
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    // console.log(errors)
    return (
      <div className="App">
        <form className="formfield" onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h1>
              <i>Create#</i>
            </h1>
          </div>
          <div>
            <label>
              <b>Requirement Name</b>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter requirement name here"
              onChange={this.handleChange}
              required
            ></input>
            {errors.fullName.length > 0 && (
              <span className="error">{errors.fullName}</span>
            )}

            <label>
              <b>Requirement Details:</b>
            </label>

            <div className="container">
              <div className="horizontal-group">
                <div className="form-group left">
                  <label>Requirement ID</label>
                  <input
                    type="text"
                    name="requireid"
                    placeholder="Enter requirement ID here"
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>
                <div className="form-group right">
                  <label>Priority</label>
                  <select name="priority" onChange={this.handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="horizontal-group">
                <div className="form-group left">
                  <label>Alt ID</label>
                  <input
                    type="text"
                    name="altid"
                    placeholder="Enter requirement Alt id here"
                    onChange={this.handleChange}
                    required
                  ></input>
                  {errors.altid.length > 0 && (
                    <span className="error">{errors.altid}</span>
                  )}
                </div>
                <div className="form-group right">
                  <label>Created By</label>
                  <input
                    type="text"
                    value="admin"
                    name="admin"
                    onChange={this.handleChange}
                    disabled
                    required
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
            <br></br>
            <label>
              <b>Description</b>
            </label>
            <br></br>
            <textarea
              type="text"
              className="description"
              name="description"
              placeholder="Write description"
              onChange={this.handleChange}
              required
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
  }
}
