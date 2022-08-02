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
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";

const sub_array = [];
const sub_array1 = [];
fetch("http://172.20.8.192:8000/getData?doc=all", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      sub_array.push({ name: data[i].requirement_name });
      // super_array.push(...sub_array.slice(0));
    }
    for (let i = 5; i < data.length; i++) {
      sub_array1.push({ name: data[i].requirement_name });
      // super_array.push(...sub_array.slice(0));
    }
  })
  .catch((err) => {
    console.log(err);
  });
console.log(sub_array);

const data1 = {
  name: "Test Case",
  toggled: true,
  active: true,
  children: [
    {
      name: "Automation",
      children: sub_array,
    },
    {
      name: "Manual",
      children: sub_array1,
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
  // const navigate = useNavigate();
  const [data, setData] = useState(data1);
  const [cursor, setCursor] = useState(false);
  const [dis, setDisable] = useState(true);
  const [model, setModel] = React.useState("");
  const [requirement_name, setRequirename] = useState("");
  const [requirement_id, setRequireid] = useState("");
  const [priority, setPriority] = useState("");
  const [alt_id, setAltid] = useState("");
  const [docId, setDocid] = useState("");
  const [case_steps, setCasesteps] = useState("");
  const [test_type, setTesttype] = useState("");
  const [test_actions, setTestactions] = useState("");
  const [delay, setDelay] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [Name, setNode] = useState({
    alt_id: alt_id,
    description: description,
    priority: priority,
    requirement_id: requirement_id,
    requirement_name: requirement_name,
    case_steps: case_steps,
    test_type: test_type,
    test_actions: test_actions,
    delay: delay,
    unit: unit,
  });

  const [Obj, setObj] = useState("");

  const [values, setState] = useState({
    requirement_name: "",
    alt_id: "",
    requirement_id: "",
    priority: "",
    test_type: "",
    case_steps: "",
    test_actions: "",
    description: "",
    delay: "",
    unit: "",
    device: "",
    actiontype: "",

    errors: {
      fullName: "",
      altid: "",
      description: "",
    },
  });
  const [fst, setFname] = useState("");

  const [ap, setaudioplay] = useState("");

  const [av, setaudioverify] = useState("");

  const [vp, setvideoplay] = useState("");

  const [vv, setvideoverify] = useState("");

  const [apx, setapxtest] = useState("");

  // Audio Playback=======================================================
  const [inputFields, setInputFields] = useState([
    {
      audioplaydevice: "",
      bdplayermodel: "",
      bdplayerfilename: "",
      rasberryfilename: "",
    },
  ]);

  // Audio Verification==============================================================

  const [inputaudioverifyFields, setInputaudioverifyFields] = useState([
    { audioverifydevice: "", lowerlimit: "", upperlimit: "" },
  ]);

  // Video Playback===========================================================

  const [inputvideoplayFields, setInputvideoplayFields] = useState([
    { videoplaydevice: "", vprasperrymodel: "", vprasperryfilename: "" },
  ]);

  // Video Verification===================================================================

  const [inputvideoverifyFields, setInputvideoverifyFields] = useState([
    {
      videoverifydevice: "",
      videoverification: "",
      blurcount: "",
      numbercount: "",
    },
  ]);

  // APxtest=============================================================================

  const [inputapxtestFields, setInputapxtestFields] = useState([
    { outputconnector: "" },
  ]);

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
        setCasesteps(a.case_steps)
        setTesttype(a.test_type)
        setTestactions(a.test_actions)
        setDelay(a.delay);
        setUnit(a.unit)
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
    // console.log(Name.testtype)
  };

  function Edit() {
    setDisable(false);
  }

  function Cancel() {
    window.location.href = "/treeview";
  }
  // console.log(Name);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setNode({ ...Name, [name]: value });
    setState({ ...Name, [name]: value });
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

    // let queryString = JSON.stringify(query);
    // fetch("http://172.20.8.192:8000/updateData", {
    //   method: "PATCH",
    //   body: queryString,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     window.location.href = "/treeview";
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  // Audio Playback==========================================================================

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const cloneaudioplayback = () => {
    for (let i = 0; i < inputFields.length; i++) {
      let newfield = {
        audioplaydevice: inputFields[i].audioplaydevice,
        bdplayermodel: inputFields[i].bdplayermodel,
        bdplayerfilename: inputFields[i].bdplayerfilename,
        rasberryfilename: inputFields[i].rasberryfilename,
      };

      setInputFields([...inputFields, newfield]);
    }
  };

  // Audio Verfication======================================================================
  const handleaudioverifyFormChange = (index, event) => {
    let data = [...inputaudioverifyFields];
    data[index][event.target.name] = event.target.value;
    setInputaudioverifyFields(data);
  };

  const removeaudioverifyFields = (index) => {
    let data = [...inputaudioverifyFields];
    data.splice(index, 1);
    setInputaudioverifyFields(data);
  };

  const cloneaudioverification = () => {
    let newaudioverifyfield = {
      audioverifydevice: "",
      lowerlimit: "",
      upperlimit: "",
    };

    setInputaudioverifyFields([...inputaudioverifyFields, newaudioverifyfield]);
  };
  // Video Playback========================================================

  const handlevideoplayFormChange = (index, event) => {
    let data = [...inputvideoplayFields];
    data[index][event.target.name] = event.target.value;
    setInputvideoplayFields(data);
  };

  const removevideoplayFields = (index) => {
    let data = [...inputvideoplayFields];
    data.splice(index, 1);
    setInputvideoplayFields(data);
  };

  const clonevideoplayback = () => {
    let newvideoplayfield = {
      videoplaydevice: "",
      vprasperrymodel: "",
      vprasperryfilename: "",
    };

    setInputvideoplayFields([...inputvideoplayFields, newvideoplayfield]);
  };

  // Video Verification==================================================================

  const handlevideoverifyFormChange = (index, event) => {
    let data = [...inputvideoverifyFields];
    data[index][event.target.name] = event.target.value;
    setInputvideoverifyFields(data);
  };

  const removevideoverifyFields = (index) => {
    let data = [...inputvideoverifyFields];
    data.splice(index, 1);
    setInputvideoverifyFields(data);
  };

  const clonevideoverification = () => {
    let newvideoverifyfield = {
      videoverifydevice: "",
      videoverification: "",
      blurcount: "",
      numbercount: "",
    };
    setInputvideoverifyFields([...inputvideoverifyFields, newvideoverifyfield]);
  };

  // APxtest=============================================================================

  const handleapxtestFormChange = (index, event) => {
    let data = [...inputapxtestFields];
    data[index][event.target.name] = event.target.value;
    setInputapxtestFields(data);
  };

  const removeapxtestFields = (index) => {
    let data = [...inputapxtestFields];
    data.splice(index, 1);
    setInputapxtestFields(data);
  };

  const cloneapxtest = () => {
    let newapxtestfield = {};

    setInputapxtestFields([...inputapxtestFields, newapxtestfield]);
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
          <div className="inventory"><center><p>Inventory</p></center></div>
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
        <div className="inventory"><center><p>Inventory</p></center></div>
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
        <div>
          <label>
            <b>Requirement Name</b>
          </label>
          <input
            type="text"
            name="requirement_name"
            placeholder="Enter requirement name here"
            onChange={handleChange}
            value={Name.requirement_name}
            disabled={dis}
            required
          ></input>

          <label>
            <b>Requirement Details:</b>
          </label>

          <div className="container">
            <div className="Row">
              <div className="Column">
                {/* <label for="requuirement_id">Requirement ID</label> */}
                <input
                  type="text"
                  name="requirement_id"
                  placeholder="Enter requirement ID here"
                  onChange={handleChange}
                  value={Name.requirement_id}
                  disabled={dis}
                  required
                ></input>
              </div>
              <div className="Column">
                {/* <label for="Alt_id">Alt ID</label> */}
                <input
                  type="text"
                  name="alt_id"
                  value={Name.alt_id}
                  placeholder="Enter requirement Alt id here"
                  onChange={handleChange}
                  disabled={dis}
                  required
                ></input>
                
              </div>
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                <select
                  name="priority"
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

            <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                <select
                  name="test_type"
                    value={Name.test_type}
                  onChange={handleChange}
                  disabled={dis}
                >
                  <option value="Manual">Manual</option>
                  <option value="Automated">Automated</option>
                </select>
              </div>
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                <select
                  name="case_steps"
                    value={Name.case_steps}
                  onChange={handleChange}
                  disabled={dis}
                >
                  <option value="Test case(Steps)">Test case(Steps)</option>
                  <option value="Test case(Text)">Test case(Text)</option>
                </select>
              </div>
              <div className="Column">
                {/* <label for="Created">Created By</label> */}
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
          <label>
            <b>Description</b>
          </label>
          <br></br>
          <textarea
            type="text"
            className="description"
            name="description"
            placeholder="Write description"
            value={Name.description}
            onChange={handleChange}
            disabled={dis}
            // required
          ></textarea>
          <br></br>
          <br></br>
          {/* Automated Test======================================================================================================== */}

          {Name.test_type === "Automated" ? (
            <div>
              {Name.test_type === "Automated" ? (
                <div>
                  <div>
                    <label>
                      <b>Test Actions:</b>
                    </label>

                    <select
                      className="actiondrop"
                      name="test_actions"
                      // value={Name.test_actions}
                      onChange={handleChange}
                      disabled={dis}
                    >
                      <option
                        // value="actiontype"
                        defaultValue="selected"
                        hidden="hidden"
                        className="option_css"
                      >
                        Select Actions
                      </option>
                      <option value="Audio Playback">Audio Playback</option>
                      <option value="Audio Verification">
                        Audio Verification
                      </option>
                      <option value="Video Playback">Video Playback</option>
                      <option value="Video Verification">
                        Video Verification
                      </option>
                      <option value="APx Test">APx Test</option>
                    </select>
                    <button
                      type="button"
                      className="actionbtn"
                      // onClick={actionsubmit}
                    >
                      Add
                    </button>
                  </div>
                  <div className="Row">
                    <div className="Column">
                      {/* <label className="delay1" for="Delay">Delay</label> */}

                      <input
                        className="delay"
                        type="number"
                        name="delay"
                        value={Name.delay}
                        placeholder="0"
                        onChange={handleChange}
                        disabled={dis}
                      />

                      <select
                        className="unit"
                        name="unit"
                        value={Name.unit}
                        onChange={handleChange}
                        disabled={dis}
                      >
                        <option value="ms">ms</option>
                        <option value="sec">sec</option>
                        <option value="min">min</option>
                      </select>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Test Actions============================================================ */}
              {/* Auduio Playback================================================================================== */}
              {ap === "AdioPlaybacktrue" ? (
                <div className="fulldiv">
                  <form onSubmit={handleSubmit}>
                    {inputFields.map((input, index) => {
                      return (
                        <div className="Audioplayback">
                          <div className="audioform-header">
                            <i>Audio Playback</i>

                            <div
                              className="delicon"
                              onClick={() => removeFields(index)}
                            >
                              {" "}
                              <DeleteIcon />
                            </div>
                            <div
                              className="copyicon"
                              onClick={cloneaudioplayback}
                            >
                              {" "}
                              <FileCopyIcon />
                            </div>
                          </div>
                          <div className="insidediv">
                            {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
                            <b>Select Device:</b>{" "}
                            <select
                              className="device"
                              name="audioplaydevice"
                              onChange={(event) =>
                                handleFormChange(index, event)
                              }
                            >
                              <option value="default">Select Device</option>
                              <option value="BD Player">BD Player</option>
                              <option value="Raspberry Pi">Raspberry Pi</option>
                              <option value="Sound bar PI">Sound bar PI</option>
                            </select>
                            {inputFields[index].audioplaydevice ===
                            "BD Player" ? (
                              <div>
                                <div className="Modeldiv">
                                  <b>Model:</b>{" "}
                                  <select
                                    className="Model"
                                    name="bdplayermodel"
                                    onChange={(event) =>
                                      handleFormChange(index, event)
                                    }
                                  >
                                    <option value="default">
                                      Select Modal
                                    </option>
                                    <option value="SONY">SONY</option>
                                    <option value="BDP">BDP</option>
                                  </select>
                                </div>
                                <div className="buttondiv">
                                  <button
                                    type="button"
                                    className="actionbtn"
                                    onChange={(event) =>
                                      handleFormChange(index, event)
                                    }
                                  >
                                    Add Command
                                  </button>
                                </div>
                                <div className="filediv">
                                  <b>Filename:</b>{" "}
                                  <select
                                    className="filename"
                                    name="bdplayerfilename"
                                    onChange={(event) =>
                                      handleFormChange(index, event)
                                    }
                                  >
                                    <option value="default">Select file</option>
                                    <option value="sample.ac3">
                                      sample.ac3
                                    </option>
                                    <option value="sample.wav">
                                      sample.wav
                                    </option>
                                  </select>
                                </div>
                              </div>
                            ) : inputFields[index].audioplaydevice ===
                              "Raspberry Pi" ? (
                              <div className="Modeldiv">
                                <b>Filename:</b>{" "}
                                <select
                                  className="filename"
                                  name="rasberryfilename"
                                  onChange={(event) =>
                                    handleFormChange(index, event)
                                  }
                                >
                                  <option value="default">Select file</option>
                                  <option value="sample.ac3">sample.ac3</option>
                                  <option value="sample.wav">sample.wav</option>
                                </select>
                              </div>
                            ) : inputFields.audioplaydevice ===
                              "Sound br PI" ? (
                              <div></div>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </form>
                </div>
              ) : null}
              {/* Audio Verfication======================================================================== */}

              
          </div>) : null}
          

          {/* <div className="horizontal-group"> */}
          <div className="form-footer">
            <button type="reset" className="btn1">
              Cancel
            </button>
            <button className="btn" id="Save">
              Save
            </button>
          </div>
          {/* </div> */}
        </div>
      </form>
    </div>
        </div>
      </div>
    );
  }
};

export default Hello;
