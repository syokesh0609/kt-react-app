import MUIDataTable from "mui-datatables";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import Treeview from "./Treeview";

function Treeviewtable() {
  const [Clickedval, setClick] = useState("");
  //   const navigate = useNavigate();
  //   const [data, setData] = useState(data1);
  //   const [cursor, setCursor] = useState(false);
  const [dis, setDisable] = useState(true);
  //   const [model, setModel] = React.useState("");
  const [requirement_name, setRequirename] = useState("");
  const [requirement_id, setRequireid] = useState("");
  const [priority, setPriority] = useState("");
  const [alt_id, setAltid] = useState("");
  const [docId, setDocid] = useState("");
  const [description, setDescription] = useState("");
  const [Name, setNode] = useState({
    alt_id: alt_id,
    description: description,
    priority: priority,
    requirement_id: requirement_id,
    requirement_name: requirement_name,
  });

  const [Obj, setObj] = useState("");
  //   const columns = [
  //     "requirement_name",
  //     "requirement_id",
  //     "priority",
  //     "alt_id",
  //     "created_by",
  //     "description",
  //   ];

  const columns = [
    {
      name: "requirement_name",
      label: "Requirement Name",
      options: {
        filter: true,
        sort: false,
        //   filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          function tab() {
            console.log(value);
            setClick(value);
            setDisable(true);

            setObj(value);
            fetch("http://172.20.8.192:8000/getData?doc=all", {
              method: "GET",
            })
              .then((response) => response.json())
              .then((data) => {
                let a = data.find(
                  ({ requirement_name }) => requirement_name === value
                );

                setRequirename(a.requirement_name);
                setRequireid(a.requirement_id);
                setPriority(a.priority);
                setDescription(a.description);
                setAltid(a.alt_id);
                setDocid(a._id);
                // navigate("/treeview", {state:{a}})
                //
                console.log(a);
                setNode(a);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          return (
            <a className="link" onClick={tab}>
              <b>{value}</b>
            </a>
          );
        },
      },
    },
    {
      name: "requirement_id",
      label: "Requirement ID",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "priority",
      label: "Priority",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "alt_id",
      label: "Alt ID",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "created_by",
      label: "Created By",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const navigate = useNavigate();

  const [data1, setData] = useState([]);
  // const [docId, setDocId] = useState("")
  const getData = () => {
    fetch("http://172.20.8.192:8000/getData?doc=all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data1);
  const data = data1;

  const options = {
    filterType: "checkbox",
    onRowsDelete: (rowsDeleted, dataRows) => {
      console.log(rowsDeleted.data.length);

      for (let i = 0; i < rowsDeleted.data.length; i++) {
        let indexValue = rowsDeleted.data[i].index;

        console.log(indexValue);
        fetch("http://172.20.8.192:8000/getData?doc=all", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            let docId = data[indexValue]._id;
            console.log(docId);

            fetch(`http://172.20.8.192:8000/deleteData?docId=${docId}`, {
              method: "Delete",
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
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //  console.log(dataRows)
  };
  function add() {
    navigate("/Form");
  }

  function Edit() {
    setDisable(false);
  }

  function Cancel() {
    window.location.href = "/treeview";
  }
  console.log(Name);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setNode({ ...Name, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let query = {
      DocId: docId,
      requirement_name: Name.requirement_name,
      requirement_id: Name.requirement_id,
      priority: Name.priority,
      alt_id: Name.alt_id,
      created_by: "admin",
      description: Name.description,
    };
    //   // setUdata(a);
    console.log(query);

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
        window.location.href = "/treeview";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (Clickedval === "") {
    return (
      <div className="Apptable1">
        <button className="new" onClick={add}>
          +
        </button>
        <MUIDataTable
          title={"Manage Versions"}
          data={data}
          columns={columns}
          // icons={tableIcons}
          options={options}
        />
      </div>
    );
  } else {
    return (
      <div className="Apptable1">
        <div className="App">
          <form className="formfield" onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="btn2" onClick={Edit}>
                Edit
              </div>
              <h1>
                <i>Update#</i>
              </h1>
            </div>
            <label for="requuirement_name">
              <b>Requirement Name</b>
            </label>
            <input
              type="text"
              name="requirement_name"
              placeholder="Enter requirement name here"
              value={Name.requirement_name}
              disabled={dis}
              onChange={handleChange}
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
                    name="requirement_id"
                    placeholder="Enter requirement ID here"
                    value={Name.requirement_id}
                    disabled={dis}
                    onChange={handleChange}
                    // onChange={(event) => setTitle1(event.target.value)}
                    required
                  ></input>
                </div>
                <div className="form-group right">
                  <label>Priority</label>
                  <select
                    name="priority"
                    for="priority"
                    value={Name.priority}
                    onChange={handleChange}
                    disabled={dis}
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
                    id="Alt_id"
                    type="text"
                    name="alt_id"
                    placeholder="Enter requirement Alt id here"
                    value={Name.alt_id}
                    disabled={dis}
                    onChange={handleChange}
                    // onChange={(event) => setTitle3(event.target.value)}
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
              value={Name.description}
              disabled={dis}
              onChange={handleChange}
              // onChange={(event) => setTitle5(event.target.value)}
            ></textarea>
            <br></br>
            <br></br>

            <div className="horizontal-group">
              <div className="form-group right">
                <button type="reset" className="btn1" onClick={Cancel}>
                  Cancel
                </button>
                <button className="btn" id="Save" disabled={dis}>
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Treeviewtable;
