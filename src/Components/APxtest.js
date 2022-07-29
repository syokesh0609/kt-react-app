import React from "react";
import { useState } from "react";
import "./Form.css";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const Videoverification = () => {
  const [inputapxtestFields, setInputapxtestFields] = useState([
    {}
  ])


  const handleapxtestFormChange = (index, event) => {
    let data = [...inputapxtestFields];
    data[index][event.target.name] = event.target.value;
    setInputapxtestFields(data);
 }

 const cloneapxtest = () => {
  let newapxtestfield = {}

  setInputapxtestFields([...inputapxtestFields, newapxtestfield])
}

const submit = (e) => {
  e.preventDefault();
  console.log(inputapxtestFields)
}

const removeapxtestFields = (index) => {
  let data = [...inputapxtestFields];
  data.splice(index, 1)
  setInputapxtestFields(data)
}

  return (
    <div>
      <form onSubmit={submit}>
      {inputapxtestFields.map((input, index) => {
          return (
        <div className="Audioplayback">
        <div className="audioform-header">
          <i>APx Test</i>
          <div className="delicon" onClick={() => removeapxtestFields(index)}> <DeleteIcon /></div>
          <div className="copyicon" onClick={cloneapxtest}> <FileCopyIcon /></div>
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
                <label><b>Signal to Noise Ratio</b></label>
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
                <label><b>Level and Gain</b></label>
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
                <label><b>Frequency Response</b></label>
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
      {/* <button onClick={addFields}>Add More..</button> */}
      <button onClick={submit}>Submit</button>
    </div>

  );
};
export default Videoverification;
