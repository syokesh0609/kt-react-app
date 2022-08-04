import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import MUIDataTable from "mui-datatables";
import Treeview from "./Treeview";
import CreateForm from "./CreateForm";
import "./Treeview.css";
import Treeviewtable from "./Treeviewtable";
// import React, { useState } from "react";
import { Treebeard, decorators } from "react-treebeard";
import styles from "./styles";
import TreeviewUpdate from "./TreeviewUpdate";
import { useNavigate } from "react-router-dom";
import { Divider } from "@material-ui/core";
import "./Form.css";
import Viewmappingtable from "./Viewmapping"
import { FaUserCog } from "react-icons/fa";
import Newuser from "./Newusercreate"

const data1 = {
  name: "Project Setup",
  toggled: true,
  active: true,
  children: [
    {
      name: "Project Config",
      
    },
    {
        name: "Device Config",
        
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
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 1700,
    height: 900,
  },
};

function Mapping() {
  const [modalOpen, setModalOpen] = useState(false);

  const [modalOpen1, setModalOpen1] = useState(false);


  const [datatree, setData] = useState(data1);
  const [cursor, setCursor] = useState(false);
  const [dis, setDisable] = useState(true);
  const [model, setModel] = React.useState("");
  const [userset, setUser] = useState("");
  const [newuser, setAdd] = useState("");
  const [priority, setPriority] = useState("");
  const [alt_id, setAltid] = useState("");
  const [docId, setDocid] = useState("");
  const [description, setDescription] = useState("");
  const [Obj, setObj] = useState("");

  const onToggle = (node, toggled) => {
    setDisable(true);
    console.log("df", node);

    setObj(node.name);

    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, datatree));

    if (node.model) {
      setModel(node.model);
    } else {
      setModel("");
    }
  };

  //   Table====================================================================

  const columns1 = [
    "username",
    "email",
    "password",
    "role"
  ];
  const navigate = useNavigate();

  const [tabledata, setData1] = useState([]);
  // const [docId, setDocId] = useState("")
  const getData = () => {
    fetch("http://172.20.8.192:8000/userreadData?doc=all", {
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
        setData1(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

//   console.log(data1);
  const data = tabledata;
  console.log(tabledata)

  

  const options = {
    filterType: "checkbox",

    
  };


//   function view(){
//     setModalOpen1(true);
// //     fetch("http://172.20.8.192:8000/maprequirementreadData?doc=all", {
// //   method: "GET",
// // })
// //   .then((response) => response.json())
// //   .then((data) => {
// //     setViewmapping(data)
// //     console.log(data)
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
//   }

//   const columns_viewmapping = [ "alt_id", "requirement_name", "created_by"]

//   const options1 = {
//     filterType: 'checkbox',
//   };

function usersetup(){
    setUser("usersetuptrue")
    setAdd("")

}

function add() {
    // navigate("/Form");
    setAdd("add")
    setUser("")
    // console.log(typeof(Addnewrepo))
  }

  return (
    <div className="App">
      

        <div className="App1">
          <div className="tab">
            <Treebeard
              data={datatree}
              onToggle={onToggle}
              style={styles}
              decorators={{ ...decorators, ...Header }}
            />
            <div className="usersetup" onClick={usersetup}><FaUserCog/>User Setup</div>
          </div>
        { userset === "usersetuptrue" ?
          <div className="tabcontent">
            <button className="new" onClick={add}>
          +
        </button>
            <MUIDataTable
              title={"User Management"}
              data={data}
              columns={columns1}
              // icons={tableIcons}
              options={options}
            />

          </div> : null}

          { newuser === "add" ?
          <div className="tabcontent">
            <Newuser />
          </div> : null}
        </div>
      
    </div>
  );
}

export default Mapping;
