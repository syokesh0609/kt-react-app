import MUIDataTable from "mui-datatables";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Crud() {
  const columns = [
    "requirement_name",
    "requirement_id",
    "priority",
    "alt_id",
    "created_by",
    "description",
  ];
  const navigate = useNavigate();

  const [data1, setData] = useState([]);
  // const [docId, setDocId] = useState("")
  const getData = () => {
    fetch("http://172.20.8.192:8000/maprequirementreadData?doc=all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data1);
  const data = data1;

  const options = {
    filterType: "checkbox",
    // selectableRowsOnClick: true,

    onRowsDelete: (rowsDeleted, dataRows) => {
      console.log(rowsDeleted);

      for (let i = 0; i < rowsDeleted.data.length; i++) {
        let indexValue = rowsDeleted.data[i].index;

        console.log(indexValue);
        fetch("http://172.20.8.192:8000/maprequirementreadData?doc=all", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            let docId = data[indexValue]._id;
            console.log(docId);

            fetch(
              `http://172.20.8.192:8000/maprequirementdeleteData?docId=${docId}`,
              {
                method: "Delete",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //  console.log(dataRows)
  };

  return (
    <div className="Apptable">
      <MUIDataTable
        title={"Manage Versions"}
        data={data}
        columns={columns}
        // icons={tableIcons}
        options={options}
      />
    </div>
  );
}

export default Crud;
