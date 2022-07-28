import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";
import Audioplayback from "./Audioplayback";
import Audioverification from "./Audioverification";
import Videoplayback from "./Videoplayback";
import Videoverification from "./Videoverification";
import APxtest from "./APxtest";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useLocation } from "react-router-dom";

const Val = () => {
  const location = useLocation();
  const location1 = useLocation();

  // const location = useLocation();
  //   let docId = location.state.id;
  //   let Createrequirement_name = location.state.Rows[0];
  //   let Createrequirement_id = location.state.Rows[1];
  //   let Createpriority = location.state.Rows[2];
  //   let Createaltid = location.state.Rows[3];
  //   let Createdescription = location.state.Rows[5];

  //   console.log(location)
  // const [values, setState] = useState({ fullName: null,
  //     email: null,
  //     password: null,});
  const [values, setState] = useState({
    fullName: "",
    altid: "",
    requireid: "",
    priority: "",
    testtype: "",
    casesteps: "",
    testactions: "",
    description: "",
    device: "",
    actiontype: "",

    errors: {
      fullName: "",
      altid: "",
      description: "",
    },
  });
  const [fst, setFname] = useState("");

  const [Type, setAplayback] = useState("");

  const [{ Audioplaybackcomp }, setItems] = useState({ Audioplaybackcomp: [] });

  const [{ Audioverificationcomp }, setItemsav] = useState({
    Audioverificationcomp: [],
  });

  const [{ Videoplaybackcomp }, setItemsvp] = useState({
    Videoplaybackcomp: [],
  });

  const [{ Videoverificationcomp }, setItemsvv] = useState({
    Videoverificationcomp: [],
  });

  const [{ Apxtestcomp }, setItemsapx] = useState({ Apxtestcomp: [] });

  const [ap, setaudioplay] = useState("");

  const [av, setaudioverify] = useState("");

  const [vp, setvideoplay] = useState("");

  const [vv, setvideoverify] = useState("");

  const [apx, setapxtest] = useState("");

  const [locatedata, setlocaldata] = useState("");

  const [locatedata1, setlocaldata1] = useState("");

  const [locatedata2, setlocaldata2] = useState("");

  const [locatedata3, setlocaldata3] = useState("");

  const [finalaudioplaydata, setfinalaudioplay] = useState("");

  const [finalaudioverifydata, setfinalaudioverify] = useState("");

  const [finalvideoplaydata, setfinalvideoplay] = useState("");

  const [finalvideoverifydata, setfinalvideoverify] = useState("");
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
    { videoverifydevice: '', videoverification: '', blurcount: '',numbercount:""}
  ])

  // APxtest=============================================================================

  const [inputapxtestFields, setInputapxtestFields] = useState([
    {}
  ])

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
    // if(location.state.audioplaydevice === "BD Player"){
    //   setlocaldata(location.state);
    //   // console.log(locatedata)
    //   let audioplaydata = {
    //     action_type: "Audio Playback",
    //     testaction_args: locatedata,
    //   }
    //   setfinalaudioplay(audioplaydata)
    //   // console.log(finalaudioplaydata)
    // }
    // if(location.state.audioplaydevice === ""){
    //   setfinalaudioplay("")
    // }
    // if(location.state.audioverifydevice === "Microphone(AC)" || location.state.audioverifydevice === "Audyssey"){
    //   setlocaldata1(location.state);
    //   // console.log(locatedata)
    //   let audioverifydata = {
    //     action_type: "Audio Verification",
    //     testaction_args: locatedata1,
    //   }
    //   setfinalaudioverify(audioverifydata)
    //   // console.log(finalaudioplaydata)
    // }
    // if(location.state.audioverifydevice === "" || location.state.audioverifydevice === ""){
    //   setfinalaudioverify("")
    // }
    // if(location.state.videoplaydevice === "Rasperry Pi"){
    //   setlocaldata2(location.state);
    //   // console.log(locatedata)
    //   let videoplaydata = {
    //     action_type: "Video Playback",
    //     testaction_args: locatedata2,
    //   }
    //   setfinalvideoplay(videoplaydata)
    //   // console.log(finalaudioplaydata)
    // }
    // if(location.state.videoverifydevice === "WebCam(PC)"){
    //   setlocaldata3(location.state);
    //   // console.log(locatedata)
    //   let videoverifydata = {
    //     action_type: "Video Verification",
    //     testaction_args: locatedata3,
    //   }
    //   setfinalvideoverify(videoverifydata)
    //   // console.log(finalaudioplaydata)
    // }
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
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
      console.log(location.state);

      let query = [
        {
          // DocId: docId,
          requirement_name: values.fullName,
          requirement_id: values.requireid,
          priority: values.priority,
          alt_id: values.altid,
          test_type: values.testtype,
          case_steps: values.casesteps,
          created_by: "admin",
          description: values.description,
          test_actions: [
            //   finalaudioplaydata,
            // finalaudioverifydata,
            // finalvideoplaydata,
            // finalvideoverifydata,
            // {location.state}
          ],
        },
      ];

      // Audio Playback=======================================

      if (inputFields[0].audioplaydevice !== "") {
        // console.log(inputFields);
        for (let i = 0; i < inputFields.length; i++) {
          let audioplaydata = {
            action_type: "Audio Playback",
            testaction_args: inputFields[i],
          };
          // query[0].test_actions.push(c)
          query[0].test_actions.push(audioplaydata);
        }
      }

      // Audio Verification=====================================================

      if (inputaudioverifyFields[0].audioverifydevice !== "") {
        // console.log(inputFields);
        for (let i = 0; i < inputaudioverifyFields.length; i++) {
          let audioverifydata = {
            action_type: "Audio Verification",
            testaction_args: inputaudioverifyFields[i],
          };
          query[0].test_actions.push(audioverifydata);
        }
      }

      // Video Playback==========================================================

      if (inputvideoplayFields[0].videoplaydevice !== "") {
        // console.log(inputFields);
        for (let i = 0; i < inputvideoplayFields.length; i++) {
          let videoplaydata = {
            action_type: "Video Playback",
            testaction_args: inputvideoplayFields[i],
          };
          query[0].test_actions.push(videoplaydata);
        }
      }

      if (inputvideoverifyFields[0].videoverifydevice !== "") {
        // console.log(inputFields);
        for (let i = 0; i < inputvideoverifyFields.length; i++) {
          let videoverifydata = {
            action_type: "Video Verification",
            testaction_args: inputvideoverifyFields[i],
          };
          query[0].test_actions.push(videoverifydata);
        }
      }

      if (inputapxtestFields[0].audioformate !== "") {
        // console.log(inputFields);
        for (let i = 0; i < inputapxtestFields.length; i++) {
          let apxtestdata = {
            action_type: "APxtest",
            testaction_args: inputapxtestFields[i],
          };
          query[0].test_actions.push(apxtestdata);
        }
      }


      console.log(query);
      //   console.log(values);
      //   // console.log(fst);
      //   //   console.log(value)

      //   let queryString = JSON.stringify(query);
      //   fetch("http://172.20.8.192:8000/createData", {
      //     method: "POST",
      //     body: queryString,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log(data);
      //       window.location.href = "/requirements";
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //     });
      // } else {
      //   console.error("Invalid Form");
      //   console.log(values);
    }
  };
  // console.log(location.state)
  function cancel() {
    // window.location.href = "/requirements";
  }

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  function actionsubmit() {
    if (values.testactions === "Audio Playback") {
      console.log("action");
      setaudioplay("AdioPlaybacktrue");
      if (ap === "AdioPlaybacktrue") {
        let newfield = {
          audioplaydevice: "",
          bdplayermodel: "",
          bdplayerfilename: "",
          rasberryfilename: "",
        };

        setInputFields([...inputFields, newfield]);
      }
    }
    if (values.testactions === "Audio Verification") {
      console.log("action");
      setaudioverify("AdioVerifytrue");
      if (av === "AdioVerifytrue") {
        let newaudioverifyfield = {
          audioverifydevice: "",
          lowerlimit: "",
          upperlimit: "",
        };

        setInputaudioverifyFields([
          ...inputaudioverifyFields,
          newaudioverifyfield,
        ]);
      }
    }

    if (values.testactions === "Video Playback") {
      setvideoplay("Videoplaytrue");
      if (vp === "Videoplaytrue") {
        let newvideoplayfield = {
          videoplaydevice: "",
          vprasperrymodel: "",
          vprasperryfilename: "",
        };

        setInputvideoplayFields([...inputvideoplayFields, newvideoplayfield]);
      }
    }
    if (values.testactions === "Video Verification") {
      setvideoverify("Videoverifytrue");
      if(vv === "Videoverifytrue"){
      let newvideoplayfield = { videoverifydevice: '', videoverification: '', blurcount: '',numbercount:""}

      setInputvideoverifyFields([...inputvideoverifyFields, newvideoplayfield])
      }
    }
    if (values.testactions === "APx Test") {
      setapxtest("Apxtesttrue");
      if(apx === "Apxtesttrue"){
        let newapxtestfield = {}

  setInputapxtestFields([...inputapxtestFields, newapxtestfield])
      }
    }
  }
  const { errors } = values;

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

  // Video Verification==================================================================

  const handlevideoverifyFormChange = (index, event) => {
    let data = [...inputvideoverifyFields];
    data[index][event.target.name] = event.target.value;
    setInputvideoverifyFields(data);
 }

  const removevideoverifyFields = (index) => {
    let data = [...inputvideoverifyFields];
    data.splice(index, 1)
    setInputvideoverifyFields(data)
  }

  // APxtest=============================================================================

  const handleapxtestFormChange = (index, event) => {
    let data = [...inputapxtestFields];
    data[index][event.target.name] = event.target.value;
    setInputapxtestFields(data);
 }

 const removeapxtestFields = (index) => {
  let data = [...inputapxtestFields];
  data.splice(index, 1)
  setInputapxtestFields(data)
}

  return (
    <div className="App">
      <form className="formfield" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1>
            <i>Create#</i>
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
            <div className="Row">
              <div className="Column">
                {/* <label for="requuirement_id">Requirement ID</label> */}
                <input
                  type="text"
                  name="requireid"
                  placeholder="Enter requirement ID here"
                  onChange={handleChange}
                  value={values.requireid}
                  required
                ></input>
              </div>
              <div className="Column">
                {/* <label for="Alt_id">Alt ID</label> */}
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
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
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

            <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                <select
                  name="testtype"
                  //   value={values.priority}
                  onChange={handleChange}
                >
                  <option value="Manual">Manual</option>
                  <option value="Automated">Automated</option>
                </select>
              </div>
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                <select
                  name="casesteps"
                  //   value={values.priority}
                  onChange={handleChange}
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
          {/* Automated Test======================================================================================================== */}

          {values.testtype === "Automated" ? (
            <div>
              <div>
                <label for="Testactions">
                  <b>Test Actions:</b>
                </label>

                <select
                  className="actiondrop"
                  name="testactions"
                  // value={values.priority}
                  onChange={handleChange}
                >
                  <option
                    // value="actiontype"
                    selected="selected"
                    hidden="hidden"
                    className="option_css"
                  >
                    Select Actions
                  </option>
                  <option value="Audio Playback">Audio Playback</option>
                  <option value="Audio Verification">Audio Verification</option>
                  <option value="Video Playback">Video Playback</option>
                  <option value="Video Verification">Video Verification</option>
                  <option value="APx Test">APx Test</option>
                </select>
                <button
                  type="button"
                  className="actionbtn"
                  onClick={actionsubmit}
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
                    placeholder="0"
                    onChange={handleChange}
                  />

                  <select className="unit" name="unit" onChange={handleChange}>
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
                      </div>
                      <div className="insidediv">
                        {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
                        <b>Select Device:</b>{" "}
                        <select
                          className="device"
                          name="audioplaydevice"
                          onChange={(event) => handleFormChange(index, event)}
                        >
                          <option value="default">Select Device</option>
                          <option value="BD Player">BD Player</option>
                          <option value="Raspberry Pi">Raspberry Pi</option>
                          <option value="Sound bar PI">Sound bar PI</option>
                        </select>
                        {inputFields[index].audioplaydevice === "BD Player" ? (
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
                                <option value="default">Select Modal</option>
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
                                <option value="sample.ac3">sample.ac3</option>
                                <option value="sample.wav">sample.wav</option>
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
                        ) : inputFields.audioplaydevice === "Sound br PI" ? (
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

          {av === "AdioVerifytrue" ? (
            <div>
              <form onSubmit={handleSubmit}>
                {inputaudioverifyFields.map((input, index) => {
                  return (
                    <div className="Audioplayback">
                      <div className="audioform-header">
                        <i>Audio Verification</i>
                        <div
                          className="delicon"
                          onClick={() => removeaudioverifyFields(index)}
                        >
                          {" "}
                          <DeleteIcon />
                        </div>
                      </div>
                      <div className="insidediv">
                        {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
                        <b>Select Device:</b>{" "}
                        <select
                          className="device"
                          name="audioverifydevice"
                          onChange={(event) =>
                            handleaudioverifyFormChange(index, event)
                          }
                        >
                          <option value="default">Select Device</option>
                          <option value="Microphone(AC)">Microphone(AC)</option>
                          <option value="Audyssey">Audyssey</option>
                        </select>
                        <br></br>
                        {inputaudioverifyFields[index].audioverifydevice ===
                          "Microphone(AC)" ||
                        inputaudioverifyFields[index].audioverifydevice ===
                          "Audyssey" ? (
                          <div>
                            <div className="lowerdiv">
                              <b>Lower Limit:</b>{" "}
                              <input
                                type="number"
                                className="Lower"
                                name="lowerlimit"
                                placeholder="0"
                                onChange={(event) =>
                                  handleaudioverifyFormChange(index, event)
                                }
                              ></input>
                            </div>
                            <br></br>
                            {/* <div className="buttondiv">
              <button type="button" className="actionbtn">
              Add Command
            </button>
            </div> */}
                            <div className="upperdiv">
                              <b>Upper Limit:</b>{" "}
                              <input
                                type="number"
                                className="Upper"
                                name="upperlimit"
                                placeholder="0"
                                onChange={(event) =>
                                  handleaudioverifyFormChange(index, event)
                                }
                              ></input>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </form>
            </div>
          ) : null}

          {/* Video Playback================================================================ */}

          {vp === "Videoplaytrue" ? (
            <div>
              <form onSubmit={handleSubmit}>
                {inputvideoplayFields.map((input, index) => {
                  return (
                    <div className="Audioplayback">
                      <div className="audioform-header">
                        <i>Video Playback</i>
                        <div
                          className="delicon"
                          onClick={() => removevideoplayFields(index)}
                        >
                          {" "}
                          <DeleteIcon />
                        </div>
                      </div>
                      <div className="insidediv">
                        {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
                        <b>Select Device:</b>{" "}
                        <select
                          className="device"
                          name="videoplaydevice"
                          onChange={(event) =>
                            handlevideoplayFormChange(index, event)
                          }
                        >
                          <option value="default">Select Device</option>
                          <option value="Rasperry Pi">Rasperry Pi</option>
                        </select>
                        {inputvideoplayFields[index].videoplaydevice ===
                        "Rasperry Pi" ? (
                          <div>
                            <div className="Modeldiv1">
                              <b>Resolution Type:</b>{" "}
                              <select
                                className="Model1"
                                name="vprasperrymodel"
                                onChange={(event) =>
                                  handlevideoplayFormChange(index, event)
                                }
                              >
                                <option value="default">
                                  Select Resolution
                                </option>
                                <option value="CEA MODE 1">CEA MODE 1</option>
                                <option value="CEA MODE 4">CEA MODE 4</option>
                                <option value="CEA MODE 9">CEA MODE 9</option>
                                <option value="Default">Default</option>
                              </select>
                            </div>
                            {/* <div className="buttondiv">
              <button type="button" className="actionbtn">
              Add Command
            </button>
            </div> */}
                            <div className="filediv1">
                              <b>Filename:</b>{" "}
                              <input
                                type="text"
                                className="filenameinp"
                                name="vprasperryfilename"
                                placeholder="Enter filename Here"
                                onChange={(event) =>
                                  handlevideoplayFormChange(index, event)
                                }
                              ></input>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </form>
              {/* <button onClick={addFields}>Add More..</button>
      <button onClick={submit}>Submit</button> */}
            </div>
          ) : null}

{/* Video Verification================================================================== */}

          {vv === "Videoverifytrue" ? <div>
      <form onSubmit={handleSubmit}>
      {inputvideoverifyFields.map((input, index) => {
          return (
        <div className="Audioplayback">
        <div className="audioform-header">
          <i>Video Verification</i>
          <div className="delicon" onClick={() => removevideoverifyFields(index)}> <DeleteIcon /></div>
         
        </div>
        <div className="insidediv">
          <div className="selectdev">
          <b>Select Device:</b>{" "}
          <select className="device" name="videoverifydevice" onChange={event => handlevideoverifyFormChange(index, event)}>
            <option value="default">Select Device</option>
            <option value="WebCam(PC)">WebCam(PC)</option>
          </select>
          </div>
          <div className="selecttype">
          <b>Verification Type:</b>{" "}
          <select className="device" name="videoverification" onChange={event => handlevideoverifyFormChange(index, event)}>
            <option value="default">Select Device</option>
            <option value="Blur Verification">Blur Verification</option>
          </select>
          </div>
          {inputvideoverifyFields[index].videoverification === "Blur Verification" ? (
            <div>
                <div className="Modeldiv">
              <b>No.of blur count</b>{" "}
              <select className="Model" name="blurcount" onChange={event => handlevideoverifyFormChange(index, event)}>
                <option value="default">Select Modal</option>
                <option value="is equal to">is equal to</option>
                <option value="is less than">is less than</option>
                <option value="is greater than">is greater than</option>
              </select>
              {/* </div>
              <div className="filediv"> */}
               <input type="number" className="Upper" name="numbercount" placeholder="0" onChange={event => handlevideoverifyFormChange(index, event)}></input>
               </div>
              
            </div>
          ) : null}
        </div>
        </div>
        )
      })}
      </form>
    </div> : null}

{/* APxtest ================================================================================= */}
          {apx === "Apxtesttrue" ? <div>
      <form onSubmit={handleSubmit}>
      {inputapxtestFields.map((input, index) => {
          return (
        <div className="Audioplayback">
        <div className="audioform-header">
          <i>APx Test</i>
          <div className="delicon" onClick={() => removeapxtestFields(index)}> <DeleteIcon /></div>
         {/* <div className="copyicon" > <FileCopyIcon /></div> */}
        </div>
        <div className="insidediv">

          <div className="container12">
            {/* <div className="filediv"><input type="file" className="file"></input></div> */}
            <div className="boxapx">
            <div className="Row">
              <div className="Column">
                {/* <label for="requuirement_id">Requirement ID</label> */}
                Output Connector<select
                  name="outputconnector"
                //   value={values.priority}
                className="outconnector"
                onChange={event => handleapxtestFormChange(index, event)}
                >
                  <option value="default">Select Connector</option>
                  <option value="Analog Unbalanced">Analog Unbalanced</option>
                  <option value="Analog Balanced">Analog Balanced</option>
                  <option value="Digital Unbalanced">Digital Unbalanced</option>
                  <option value="Digital Balanced">Digital Balanced</option>
                  <option value="Digital Optical">Digital Optical</option>
                  <option value="HDMI Source">HDMI Source</option>
                  <option value="HDMI ARC Tx">HDMI ARC Tx</option>
                  <option value="Bluetooth">Bluetooth</option>
                  <option value="Digital Seriel">Digital Seriel</option>
                  <option value="PDM">PDM</option>
                  <option value="Tranceducer">Tranceducer</option>
                  <option value="ASIO">ASIO</option>
                  <option value="None(External)">None(External)</option>
                </select>
              </div>
              <div className="Column">
                {/* <label for="Alt_id">Alt ID</label> */}
                Waveform<select
                  name="waveform"
                  className="waveform"
                //   value={values.priority}
                onChange={event => handleapxtestFormChange(index, event)}
                >
                    <option value="default">Select Connector</option>
                  <option value="f.wave">f.wave</option>
                  <option value="Sine">Sine</option>
                  <option value="Square">Square</option>
                  <option value="Noice">Noice</option>
                  <option value="Sine, Dual">Sine, Dual</option>
                  <option value="Sine, Var Phase">Sine, Var Phase</option>
                  <option value="Browse File">Browse File</option>

                </select>
              </div>
            </div>

            <div className="Row">
            <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Output Channel<input
                  type="number"
                  className="outchannel"
                //   value="admin"
                  name="outputchannel"
                  onChange={event => handleapxtestFormChange(index, event)}
                
                ></input>
              </div>
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Level<input
                  type="text"
                  className="level"
                  name="level"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              
            </div>
            <div className="Row">
              <div className="Column">
                {/* <label for="requuirement_id">Requirement ID</label> */}
                Input Connector<select
                  name="inputconnector"
                  className="inconnector"
                //   value={values.priority}
                onChange={event => handleapxtestFormChange(index, event)}
                >
                  <option value="default">Select Connector</option>
                  <option value="Analog Unbalanced">Analog Unbalanced</option>
                  <option value="Analog Balanced">Analog Balanced</option>
                  <option value="Digital Unbalanced">Digital Unbalanced</option>
                  <option value="Digital Balanced">Digital Balanced</option>
                  <option value="Digital Optical">Digital Optical</option>
                  <option value="HDMI Source">HDMI Source</option>
                  <option value="HDMI ARC Tx">HDMI ARC Tx</option>
                  <option value="Bluetooth">Bluetooth</option>
                  <option value="Digital Seriel">Digital Seriel</option>
                  <option value="PDM">PDM</option>
                  <option value="Tranceducer">Tranceducer</option>
                  <option value="ASIO">ASIO</option>
                  <option value="None(External)">None(External)</option>
                </select>
              </div>
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Frequency<input
                  type="text"
                  className="frequency"
                  name="frequency"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Input Channel<input
                  type="number"
                  className="inchannel"
                  name="inputchannel"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Description<input
                  type="text"
                  className="desci"
                  name="frequency"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
            <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Sample Rate<input
                  type="text"
                  className="samplerate"
                  name="samplerate"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              <div className="Column">
                {/* <label for="Alt_id">Alt ID</label> */}
                Audio Format<select
                  name="audioformate"
                  className="audiofromate"
                //   value={values.priority}
                onChange={event => handleapxtestFormChange(index, event)}
                >
                    <option value="default">Select Format</option>
                  <option value="Linear 2Ch Layout0">Linear 2Ch Layout0</option>
                  <option value="Linear 8Ch Layout1">Linear 8Ch Layout1</option>

                </select>
              </div>
              </div>
              </div>
              <div className="bottomdiv">
              <div className="Row">
              <div className="Column">
                <label for="snr"><b>Signal to Noise Ratio</b></label>
                Waveform<select
                  name="snrwaveform"
                  className="waveform"
                //   value={values.priority}
                onChange={event => handleapxtestFormChange(index, event)}
                >
                    <option value="default">Select Connector</option>
                  <option value="f.wave">f.wave</option>
                  <option value="Sine">Sine</option>
                  <option value="Square">Square</option>
                  <option value="Noice">Noice</option>
                  <option value="Sine, Dual">Sine, Dual</option>
                  <option value="Sine, Var Phase">Sine, Var Phase</option>
                  <option value="Browse File">Browse File</option>

                </select>
              </div>
              </div>

              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Level<input
                  type="text"
                  className="level"
                  name="snrlevel"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Frequency<input
                  type="text"
                  className="level"
                  name="snrfrequency"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>

              <div className="Row">
              <div className="Column">
                <label for="lg"><b>Level and Gain</b></label>
                Waveform<select
                  name="lgwaveform"
                  className="waveform"
                //   value={values.priority}
                onChange={event => handleapxtestFormChange(index, event)}
                >
                    <option value="default">Select Connector</option>
                  <option value="f.wave">f.wave</option>
                  <option value="Sine">Sine</option>
                  <option value="Square">Square</option>
                  <option value="Noice">Noice</option>
                  <option value="Sine, Dual">Sine, Dual</option>
                  <option value="Sine, Var Phase">Sine, Var Phase</option>
                  <option value="Browse File">Browse File</option>

                </select>
              </div>
              </div>

              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Level<input
                  type="text"
                  className="level"
                  name="lglevel"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Frequency<input
                  type="text"
                  className="level"
                  name="lgfrequency"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              <div className="Row">
              <div className="Column">
                <label for="fr"><b>Frequency Response</b></label>
                Start Frequency<input
                  type="text"
                  className="level"
                  name="startfrequency"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Level<input
                  type="text"
                  className="level"
                  name="frlevel"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              <div className="Row">
              <div className="Column">
                {/* <label for="priority">Priority</label> */}
                Stop Frequency<input
                  type="text"
                  className="level"
                  name="stopfrequency"
                  onChange={event => handleapxtestFormChange(index, event)}
                ></input>
              </div>
              </div>
              </div>
            <br></br>
            <br></br>
          </div>
          <br></br>
          
          
          <br></br>
          <br></br>
        </div>
        </div>
        )
      })}
      </form>
    </div> : null}

          {/* <div className="horizontal-group"> */}
          <div class="form-footer">
            <button type="reset" className="btn1" onClick={cancel}>
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
  );
};
export default Val;