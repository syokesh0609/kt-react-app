import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import { useEffect } from "react";

const localizer = momentLocalizer(moment);

function ApiCalendar(props) {
  const [data, setData] = useState([]);
  const [data1, setItem] = useState([]);

  //   function Acal(){
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJUeEgwVkhUelFZOGw4V1dIS3V5YXZhN3NHaFFKSWU4SCIsImV4cCI6MTY1MjQ0MTI3NiwiaWF0IjoxNjUyNDM3Njc2fQ.obtxT1dEk467u6N6r9r6Glj_4vLRSDvSqb_7eRaQNoM"}`,
      },
      body: JSON.stringify({
        project_name: "Audio_Video_Testing",
        project_id: "623ef791506af740d05fe13b",
        version_name: "AV_Version1.0",
        version_id: "623ef7e3506af740d05fe13d",
      }),
    };
    fetch(
      "https://www.jasminats.com/gateway/api/v1/sum/versionStatus",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setData(data.data.calendar_events));

    Hotcode();
  }, []);

  function Hotcode() {
    let abc = [
      {
        title: "TestAutomation_AV12345",
        start: "2022-04-26T00:00:00.000Z",
        end: "2022-04-30T00:00:00.000Z",
      },
      {
        title: "TestManual_MS12345",
        start: "2022-06-26T00:00:00.000Z",
        end: "2022-06-30T00:00:00.000Z",
      },
      {
        title: "TestAutomation_MS12345",
        start: "2022-05-26T00:00:00.000Z",
        end: "2022-05-26T00:00:00.000Z",
      },
      {
        title: "TestAutomation_ATS",
        start: "2022-7-26T00:00:00.000Z",
        end: "2022-07-27T00:00:00.000Z",
      },
      {
        title: "TestAutomation_AV12345",
        start: "2022-08-26T00:00:00.000Z",
        end: "2022-08-28T00:00:00.000Z",
      },
      {
        title: "ManualTesting_AV12345",
        start: "2022-09-26T00:00:00.000Z",
        end: "2022-09-29T00:00:00.000Z",
      },
    ];
    setItem(abc);
  }
  data.push(...data1);
  console.log(data);

  return (
    <div className="App">
      <div>
        <Calendar
          localizer={localizer}
          events={data}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 }}
        />
      </div>
    </div>
  );
}

export default ApiCalendar;
