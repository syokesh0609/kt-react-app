import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MUIDataTable from "mui-datatables";

function DataTable(){
const columns = [
    {
     name: "_id",
     label: "ID",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "runId",
     label: "Run ID",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "duration",
     label: "Duration",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "starttime",
     label: "Start Time",
     options: {
      filter: true,
      sort: false,
     }
     
     
    },
    {
        name: "status",
        label: "Status",
        options: {
         filter: true,
         sort: false,
        }
    },

    {
        name: "total_cases",
        label: "Total Cases",
        options: {
         filter: true,
         sort: false,
        }
    }


    
   ];


   const [data1, setData] = useState([]);
   useEffect(() => {
     fetch(
       "http://172.20.8.177/api/v1/er/get-all-run-results?project_id=623ef791506af740d05fe13b&version_id=623ef7e3506af740d05fe13d"
     )
       .then((res) => res.json())
       .then((data) => setData(data.data));
   }, []);
   console.log(data1);
   const data = data1;
   
   const options = {
     filterType: 'checkbox',
   };

   return (
  <div className="App">
    {/* <div className="App-header"> */}
        <div style={{ height: 400, width: "100%" }}>
   <MUIDataTable
     title={"TestCase Report"}
     data={data}
     columns={columns}
     options={options}
   />
   </div>
   </div>
//    </div>
   )
}

export default DataTable;