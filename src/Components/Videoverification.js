import React from "react";
import { useState } from "react";
import "./Form.css";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const Videoverification = () => {
  const [inputvideoverifyFields, setInputvideoplayFields] = useState([
    { videoverifydevice: '', videoverification: '', blurcount: '',numbercount:""}
  ])


  const handlevideoverifyFormChange = (index, event) => {
    let data = [...inputvideoverifyFields];
    data[index][event.target.name] = event.target.value;
    setInputvideoplayFields(data);
 }

 const addFields = () => {
  let newvideoplayfield = { videoverifydevice: '', videoverification: '', blurcount: '',numbercount:""}

  setInputvideoplayFields([...inputvideoverifyFields, newvideoplayfield])
}

const submit = (e) => {
  e.preventDefault();
  console.log(inputvideoverifyFields)
}

const removevideoverifyFields = (index) => {
  let data = [...inputvideoverifyFields];
  data.splice(index, 1)
  setInputvideoplayFields(data)
}

  return (
    <div>
      <form onSubmit={submit}>
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
    </div>
  );
};
export default Videoverification;
