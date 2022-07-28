import React from "react";
import { useState } from "react";
import "./Form.css";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Videoplayback = () => {
  const [inputvideoplayFields, setInputvideoplayFields] = useState([
    { videoplaydevice: '', vprasperrymodel: '', vprasperryfilename: '',}
  ])


  const handlevideoplayFormChange = (index, event) => {
    let data = [...inputvideoplayFields];
    data[index][event.target.name] = event.target.value;
    setInputvideoplayFields(data);
 }

 const addFields = () => {
  let newvideoplayfield = { videoplaydevice: '', vprasperrymodel: '', vprasperryfilename: '',}

  setInputvideoplayFields([...inputvideoplayFields, newvideoplayfield])
}

const submit = (e) => {
  e.preventDefault();
  console.log(inputvideoplayFields)
}

const removevideoplayFields = (index) => {
  let data = [...inputvideoplayFields];
  data.splice(index, 1)
  setInputvideoplayFields(data)
}

  return (
    <div>
      <form onSubmit={submit}>
      {inputvideoplayFields.map((input, index) => {
          return (
        <div className="Audioplayback">
        <div className="audioform-header">
          <i>Video Playback</i>
          <div className="delicon" onClick={() => removevideoplayFields(index)}> <DeleteIcon /></div>
         
        </div>
        <div className="insidediv">
          {/* <label for="requuirement_name">
            <b>Select Device</b>
          </label> */}
          <b>Select Device:</b>{" "}
          <select className="device" name="videoplaydevice" onChange={event => handlevideoplayFormChange(index, event)}>
            <option value="default">Select Device</option>
            <option value="Rasperry Pi">Rasperry Pi</option>
          </select>
          {inputvideoplayFields[index].videoplaydevice === "Rasperry Pi" ? (
            <div>
                <div className="Modeldiv1">
              <b>Resolution Type:</b>{" "}
              <select className="Model1" name="vprasperrymodel" onChange={event => handlevideoplayFormChange(index, event)}>
                <option value="default">Select Resolution</option>
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
              <input type="text" className="filenameinp" name="vprasperryfilename" placeholder="Enter filename Here" onChange={event => handlevideoplayFormChange(index, event)}></input>
              </div>
              
            </div>
          ) : null}
        </div>
        </div>
        )
      })}
      </form>
      {/* <button onClick={addFields}>Add More..</button>
      <button onClick={submit}>Submit</button> */}
    </div>
  );
};
export default Videoplayback;
