import React from "react";
import { useState } from "react";
import "./Form.css";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const Audioverification = () => {

  const [inputaudioverifyFields, setInputaudioverifyFields] = useState([
    { audioverifydevice: '', lowerlimit: '', upperlimit: '',}
  ])


  const handleaudioverifyFormChange = (index, event) => {
    let data = [...inputaudioverifyFields];
    data[index][event.target.name] = event.target.value;
    setInputaudioverifyFields(data);
 }

 const cloneaudioverification = () => {
  let newaudioverifyfield = { audioverifydevice: '', lowerlimit: '', upperlimit: '',}

  setInputaudioverifyFields([...inputaudioverifyFields, newaudioverifyfield])
}

const submit = (e) => {
  e.preventDefault();
  console.log(inputaudioverifyFields)
}

const removeaudioverifyFields = (index) => {
  let data = [...inputaudioverifyFields];
  data.splice(index, 1)
  setInputaudioverifyFields(data)
}
 

  return (
    <div>
      <form onSubmit={submit}>
      {inputaudioverifyFields.map((input, index) => {
          return (
        <div className="Audioplayback">
        <div className="audioform-header">
          <i>Audio Verification</i>
          <div className="delicon" onClick={() => removeaudioverifyFields(index)}> <DeleteIcon /></div>
          <div className="copyicon" onClick={cloneaudioverification}> <FileCopyIcon /></div>
         
        </div>
        <div className="insidediv">
          {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
          <b>Select Device:</b>{" "}
          <select className="device" name="audioverifydevice" onChange={event => handleaudioverifyFormChange(index, event)}>
            <option value="default">Select Device</option>
            <option value="Microphone(AC)">Microphone(AC)</option>
            <option value="Audyssey">Audyssey</option>

          </select><br></br>
          {inputaudioverifyFields[index].audioverifydevice === "Microphone(AC)" || inputaudioverifyFields[index].audioverifydevice === "Audyssey" ? (
            <div>
                <div className="lowerdiv">
              <b>Lower Limit:</b>{" "}
              <input type="number" className="Lower" name="lowerlimit" placeholder="0" onChange={event => handleaudioverifyFormChange(index, event)}></input>
              </div><br></br>
              {/* <div className="buttondiv">
              <button type="button" className="actionbtn">
              Add Command
            </button>
            </div> */}
              <div className="upperdiv">
              <b>Upper Limit:</b>{" "}
              <input type="number" className="Upper" name="upperlimit" placeholder="0" onChange={event => handleaudioverifyFormChange(index, event)}></input>
              </div>
              
            </div>
          ) : null}
        </div>
        </div>
        )
      })}
      </form>
      {/* <button onClick={addFields}>Add More..</button> */}
      <button onClick={submit}>Submit</button>
    </div>
  );
};
export default Audioverification;
