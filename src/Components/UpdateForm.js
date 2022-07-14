import MUIDataTable from "mui-datatables";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";

function UpdateForm() {
  const location = useLocation();
  let docId = location.state.id;
  //   console.log(docId);
  //   console.log(location.state);

  let Createrequirement_name = location.state.Rows[0];
  let Createrequirement_id = location.state.Rows[1];
  let Createpriority = location.state.Rows[2];
  let Createaltid = location.state.Rows[3];
  let Createdescription = location.state.Rows[5];
  const [UpdateRequirementName, setTitle] = useState(Createrequirement_name);
  const [UpdateRequirementId, setTitle1] = useState(Createrequirement_id);
  const [UpdatePriority, setTitle2] = useState(Createpriority);
  const [UpdateAltId, setTitle3] = useState(Createaltid);
  // const [Create, setTitle4] = useState("");
  const [UpdateDescription, setTitle5] = useState(Createdescription);
  const [Userdata, setUdata] = useState("");
  const [url, setUrl] = useState("http://localhost:3000");

  // console.log(Userdata);

  //   setTitle(Createrequirement_name);
  // document.getElementById("R_id").value = {Createrequirement_id};

  //   setTitle(a);

  function update(event) {
    event.preventDefault();
    let query = {
      DocId: docId,
      requirement_name: UpdateRequirementName,
      requirement_id: UpdateRequirementId,
      priority: UpdatePriority,
      alt_id: UpdateAltId,
      created_by: "admin",
      description: UpdateDescription,
    };
    // setUdata(a);
    console.log(query);

    fetch("http://172.20.8.192:8000/getData?doc=all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.find(({ alt_id }) => alt_id === UpdateAltId)) {
          alert("AltId already Exits!!!!!!");
        } else {
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
              window.location.href = "/Crud";
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="formfield">
        <div className="form-header">
          <h1>
            <i>Update#</i>
          </h1>
        </div>
        <label for="requuirement_name">
          <b>Requirement Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter requirement name here"
          value={UpdateRequirementName}
          onChange={(event) => setTitle(event.target.value)}
          required
        ></input>

        <label for="requuirement_details">
          <b>Requirement Details:</b>
        </label>

        <div className="container">
          <div className="horizontal-group">
            <div className="form-group left">
              <label for="requuirement_id">Requirement ID</label>
              <input
                id="R_id"
                type="text"
                placeholder="Enter requirement ID here"
                value={UpdateRequirementId}
                onChange={(event) => setTitle1(event.target.value)}
                required
              ></input>
            </div>
            <div className="form-group right">
              <label for="priority">Priority</label>
              <select onChange={(event) => setTitle2(event.target.value)}>
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
                id="Alt_id"
                type="text"
                placeholder="Enter requirement Alt id here"
                value={UpdateAltId}
                onChange={(event) => setTitle3(event.target.value)}
                required
              ></input>
            </div>
            <div className="form-group right">
              <label for="Created">Created By</label>
              <input
                type="text"
                value="admin"
                // onChange={(event) => setTitle4(event.target.value)}
                disabled
                required
              ></input>
            </div>
          </div>
        </div>
        <br></br>
        <label for="description">
          <b>Description</b>
        </label>
        {/* <br></br> */}
        <textarea
          id="Description"
          type="text"
          className="description"
          name="description"
          placeholder="Write description"
          value={UpdateDescription}
          onChange={(event) => setTitle5(event.target.value)}
        ></textarea>
        <br></br>
        <br></br>

        <div className="horizontal-group">
          <div className="form-group right">
            <button type="reset" className="btn1">
              Cancel
            </button>
            <button className="btn" id="Save" onClick={update}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
