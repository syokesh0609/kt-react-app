// import React from "react";
import CreateForm from "./CreateForm";
import "./Treeview.css";
import Treeviewtable from "./Treeviewtable";
import React, { useState } from "react";
import { Treebeard, decorators } from "react-treebeard";
import styles from "./styles";
import TreeviewUpdate from "./TreeviewUpdate";
import { useNavigate } from "react-router-dom";
import { Divider } from "@material-ui/core";
const data1 = {
  name: "Test Case",
  toggled: true,
  active: true,
  children: [
    {
      name: "Automation",
      children: [
        {
          name: "Automation Testing",
          model: "test 1 modal",
        },

        {
          name: "Automation One",
          model: "test 2 modal",
        },

        {
          name: "Automation Two",
          model: "test 3 modal",
        },

        {
          name: "Automation Three",
          model: "test 4 modal",
        },

        {
          name: "Automation Four",
          model: "test 5 modal",
        },
      ],
    },
    {
      name: "Manual",
      children: [
        {
          name: "Manual Testing",
          model: "test 1 modal",
        },

        {
          name: "Manual One",
          model: "test 2 modal",
        },

        {
          name: "Manual Two",
          model: "test 3 modal",
        },
      ],
    },
  ],
};

const Header = ({ onSelect, style, customStyles, node }) => {
  const iconType = node.children ? "folder" : "file-text";
  const iconClass = `fa fa-${iconType}`;
  const iconStyle = { marginRight: "5px" };

  return (
    <span style={style.base} onClick={onSelect}>
      {/* <Div style={node.selected ? {...style.title, ...customStyles.header.title} : style.title}> */}
      <i className={iconClass} style={iconStyle} />
      {node.name}
      {/* </Div> */}
    </span>
  );
};

const Hello = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(data1);
  const [cursor, setCursor] = useState(false);
  const [dis, setDisable] = useState(true);
  const [model, setModel] = React.useState("");
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

  const onToggle = (node, toggled) => {
    setDisable(true);
    console.log("df", node);

    setObj(node.name);
    fetch("http://172.20.8.192:8000/getData?doc=all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let a = data.find(
          ({ requirement_name }) => requirement_name === node.name
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

    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));

    if (node.model) {
      setModel(node.model);
    } else {
      setModel("");
    }
  };

  function Edit() {
    setDisable(false);
  }

  function Cancel(){
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

  if (
    Obj === "" ||
    Obj === "Test Case" ||
    Obj === "Automation" ||
    Obj === "Manual"
  ) {
    //
    return (
      <div className="App1">
        <div className="tab">
          <Treebeard
            data={data}
            onToggle={onToggle}
            style={styles}
            decorators={{ ...decorators, ...Header }}
          />
        </div>

        <div className="tabcontent">
          <Treeviewtable />
        </div>
      </div>
    );
  } else {
    // console.log(Name)
    //  Name.requirement_name= "";
    return (
      <div className="App1">
        <div className="tab">
          <Treebeard
            data={data}
            onToggle={onToggle}
            style={styles}
            decorators={{ ...decorators, ...Header }}
          />
        </div>

        <div className="tabcontent">
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
                  <button
                    className="btn"
                    id="Save"
                    disabled={dis}
                    
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Hello;
