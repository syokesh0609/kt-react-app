import React from "react";
import { useState } from "react";
import "./Form.css";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import Audioplayback1 from "./Audioplayback"
import { useNavigate } from "react-router-dom";

const Audioplayback = () => {
  //   console.log(location)
  // const [values, setState] = useState({ fullName: null,
  //     email: null,
  //     password: null,});
  const [inputFields, setInputFields] = useState([
    { audioplaydevice: '', bdplayermodel: '', bdplayerfilename: '', rasberryfilename: '', }
  ])


  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
 }

 const addFields = () => {
  let newfield = { audioplaydevice: '', bdplayermodel: '', bdplayerfilename: '', rasberryfilename: '', }

  setInputFields([...inputFields, newfield])
}

const submit = (e) => {
  e.preventDefault();
  console.log(inputFields)
}

const removeFields = (index) => {
  let data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}

  return (
    <div className="fulldiv" >
      <form onSubmit={submit}>
      {inputFields.map((input, index) => {
          return (
        <div className="Audioplayback">
        <div className="audioform-header">
          <i>Audio Playback</i>
          <div className="delicon" onClick={() => removeFields(index)}> <DeleteIcon /></div>
         
        </div>
        <div className="insidediv">
          {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
      
          <b>Select Device:</b>{" "}
          <select className="device" name="audioplaydevice" onChange={event => handleFormChange(index, event)}>
            <option value="default">Select Device</option>
            <option value="BD Player">BD Player</option>
            <option value="Raspberry Pi">Raspberry Pi</option>
            <option value="Sound bar PI">Sound bar PI</option>
          </select>
          {inputFields[index].audioplaydevice === "BD Player" ? (
            <div>
                <div className="Modeldiv">
              <b>Model:</b>{" "}
              <select className="Model" name="bdplayermodel" onChange={event => handleFormChange(index, event)}>
                <option value="default">Select Modal</option>
                <option value="SONY">SONY</option>
                <option value="BDP">BDP</option>
              </select>
              </div>
              <div className="buttondiv">
              <button type="button" className="actionbtn" onChange={event => handleFormChange(index, event)}>
              Add Command
            </button>
            </div>
              <div className="filediv">
              <b>Filename:</b>{" "}
              <select className="filename" name="bdplayerfilename" onChange={event => handleFormChange(index, event)}>
                <option value="default">Select file</option>
                <option value="sample.ac3">sample.ac3</option>
                <option value="sample.wav">sample.wav</option>
              </select></div>
              
            </div>
          ) : inputFields[index].audioplaydevice === "Raspberry Pi" ? 
          <div className="Modeldiv">
              <b>Filename:</b>{" "}
              <select className="filename" name="rasberryfilename" onChange={event => handleFormChange(index, event)}>
                <option value="default">Select file</option>
                <option value="sample.ac3">sample.ac3</option>
                <option value="sample.wav">sample.wav</option>
              </select>
              </div>: inputFields.audioplaydevice === "Sound br PI" ? <div></div> :null}
        </div>
        </div>
        )
      })}
      </form>
    </div>
    
    // <Audioplayback1 />
  );
};
export default Audioplayback;
