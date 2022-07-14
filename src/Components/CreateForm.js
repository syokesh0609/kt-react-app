import MUIDataTable from "mui-datatables";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css";

function CardForm() {
  const [RequirementName, setTitle] = useState("");
  const [RequirementId, setTitle1] = useState("");
  const [Priority, setTitle2] = useState("");
  const [AltId, setTitle3] = useState("");
  // const [Create, setTitle4] = useState("");
  const [Description, setTitle5] = useState("");
  const [Userdata, setUdata] = useState("");

  // console.log(Userdata);

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorMessagealtid, setErrorMessagealtid] = React.useState("");
  const [errorMessagerequirename, setErrorMessagerequirename] =
    React.useState("");
  const [errorMessagedescription, setErrorMessagedescription] =
    React.useState("");

  //   useEffect(() => {
  //     // POST request using fetch inside useEffect React hook
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         Accept:"application/json",
  //         "Content-Type": "application/json",

  //         Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJUeEgwVkhUelFZOGw4V1dIS3V5YXZhN3NHaFFKSWU4SCIsImV4cCI6MTY1MjQ0MTI3NiwiaWF0IjoxNjUyNDM3Njc2fQ.obtxT1dEk467u6N6r9r6Glj_4vLRSDvSqb_7eRaQNoM"}`,
  //       },
  //       body: JSON.stringify(Userdata),
  //     };
  //     fetch("http://172.20.8.177/api/v1/sum/saveVersion", requestOptions)
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  // console.log(data);
  function submit(event) {
    event.preventDefault();

    let RequirementName_validation = /^[a-z]{4,16}$/;
    let description_validation = /^(.|\s)*[a-zA-Z]+(.|\s){4}$/;
    if (
      RequirementName === "" ||
      RequirementId === "" ||
      Priority === "" ||
      AltId === "" ||
      Description === ""
    ) {
      alert("Please Enter all the datas!!!");
    } else if (!RequirementName_validation.test(RequirementName)) {
      setErrorMessagerequirename(
        "Requirement name should be min 4 to maximum 16 characters!!!"
      );
    } else if (!description_validation.test(Description)) {
      setErrorMessagedescription("Description should be min 4 characters!!!");
      setErrorMessagerequirename("");
    } else {
      let a = {
        requirement_name: RequirementName,
        requirement_id: RequirementId,
        priority: Priority,
        alt_id: AltId,
        created_by: "admin",
        description: Description,
      };
      // setUdata(a);
      // console.log(Userdata);
      fetch("http://172.20.8.192:8000/getData?doc=all", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.find(({ alt_id }) => alt_id === AltId)) {
            setErrorMessagealtid("AltId already exits!!!");
            setErrorMessagedescription("");
            setErrorMessagerequirename("");
          } else {
            let queryString = JSON.stringify(a);
            fetch("http://172.20.8.192:8000/createData", {
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
                window.location.href = "/Crud";
                // navigate("/Crud")
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
  }

  // const getData = () => {
  //   fetch("http://172.20.8.192:8000/createData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       body: JSON.stringify({a:"hihii",
  //     b:"hello",}),
  //           },
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <div className="formfield">
        <div className="form-header">
          <h1>
            <i>Create#</i>
          </h1>
        </div>
        <label for="requuirement_name">
          <b>Requirement Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter requirement name here"
          onChange={(event) => setTitle(event.target.value)}
          required
        ></input>
        {errorMessagerequirename && (
          <div className="error"> {errorMessagerequirename} </div>
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
                placeholder="Enter requirement ID here"
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
                type="text"
                placeholder="Enter requirement Alt id here"
                onChange={(event) => setTitle3(event.target.value)}
                required
              ></input>
              {errorMessagealtid && (
                <div className="error"> {errorMessagealtid} </div>
              )}
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
          type="text"
          className="description"
          name="description"
          placeholder="Write description"
          onChange={(event) => setTitle5(event.target.value)}
        ></textarea>
        {errorMessagedescription && (
          <div className="error"> {errorMessagedescription} </div>
        )}
        <br></br>
        <br></br>

        <div className="horizontal-group">
          <div className="form-group right">
            <button type="reset" className="btn1">
              Cancel
            </button>
            <button className="btn" id="Save" onClick={submit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardForm;
