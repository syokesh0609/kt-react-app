import "./App.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { createContext } from "react";

// export const ThemeContext = createContext(null);
// import { useEffect } from "react";
// import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";

function User() {
  const form = useRef(null);
  const [First_Name, setTitle] = useState("");
  const [Last_Name, setTitle1] = useState("");
  const [Employee_Id, setTitle2] = useState("");
  const [Age, setTitle3] = useState("");
  const [Domain, setTitle4] = useState("");
  const [Phone_Number, setTitle5] = useState("");
  const [Email, setTitle6] = useState("");
  const [{ Total_card_items }, setItems] = useState({ Total_card_items: [] });

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function submit(event) {
    event.preventDefault();

    let Name_validation = /^[A-Za-z]{4,16}$/;
    let Number = /^[0-9]{4}$/;
    let Number_Age = /^[0-9]{2}$/;
    let Phone = /^(0|91|\+91)?-?[9]\d{9}$/;
    let Email_For = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      First_Name === "" ||
      Last_Name === "" ||
      Email === "" ||
      Employee_Id === "" ||
      Age === "" ||
      Domain === "" ||
      Phone_Number === ""
    ) {
      alert("Please Enter all the information!");
    } else if (!Name_validation.test(First_Name)) {
      alert(
        "Please enter the correct first name! (First name should be min 4 to max 16 characters!!)"
      );
    } else if (!Name_validation.test(Last_Name)) {
      alert(
        "Please enter the correct last name! (Last name should be min 4 to max 16 characters!!"
      );
    } else if (!Email_For.test(Email)) {
      alert("Please enter the correct Email ID");
    } else if (!Number.test(Employee_Id)) {
      alert(
        "Please enter the correct Employee ID! (Employee id should be only 4 digit numbers!!)"
      );
    } else if (!Number_Age.test(Age)) {
      alert("Please enter the correct Age! (Age should be only numbers!!)");
    } else if (!Name_validation.test(Domain)) {
      alert("Please enter the correct Domain Name!");
    } else if (!Phone.test(Phone_Number)) {
      alert(
        "Please enter the correct Phone Number! (Phone number should be 10 digit numbers!!)"
      );
    } else {
      // const Total_card_items = [];
      Total_card_items.push(
        // <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div key={Total_card_items.length}>
            {/* Card===================================== */}

            <div onClick={alertwin}>
              <Card
                style={{
                  width: 400,
                  // backgroundColor: "white",
                  color: "black",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  border: "2px solid black",
                  margin: "30px",
                  cursor: "pointer",
                }}
              >
                <CardContent className="Incard" >
                  <Typography variant="h5" component="h2">
                    <b>FirstName</b> : {First_Name}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>LastName</b> : {Last_Name}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Email</b> : {Email}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Emp.Id</b> : {Employee_Id}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Age</b> : {Age}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Domain</b> : {Domain}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Phone.No</b> : {Phone_Number}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        // </ThemeContext.Provider>
      );
      setItems({ Total_card_items: [...Total_card_items] });

      // function card() {
      //   return (
      //     <>
      //       {(() => {
      //         const dataCollect = [];

      //         dataCollect.push(
      //           <div onClick={alertwin}>
      //             <Card
      //               style={{
      //                 width: 400,
      //                 backgroundColor: "white",
      //                 color: "black",
      //                 boxShadow:
      //                   "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      //                 border: "2px solid black",
      //                 margin: "30px",
      //               }}
      //             >
      //               <CardContent>
      //                 <Typography variant="h5" component="h2">
      //                   <b>FirstName</b> : {First_Name}
      //                 </Typography>
      //                 <Typography variant="h5" component="h2">
      //                   <b>LastName</b> : {Last_Name}
      //                 </Typography>
      //                 <Typography variant="h5" component="h2">
      //                   <b>Email</b> : {Email}
      //                 </Typography>
      //                 <Typography variant="h5" component="h2">
      //                   <b>Emp.ID</b> : {Employee_Id}
      //                 </Typography>
      //                 <Typography variant="h5" component="h2">
      //                   <b>Age</b> : {Age}
      //                 </Typography>
      //                 <Typography variant="h5" component="h2">
      //                   <b>Domain</b> : {Domain}
      //                 </Typography>
      //                 <Typography variant="h5" component="h2">
      //                   <b>PhoneNumber</b> : {Phone_Number}
      //                 </Typography>
      //               </CardContent>
      //             </Card>
      //           </div>
      //         );

      //         return dataCollect;
      //       })()}
      //     </>
      //   );
      // }
      form.current.reset();
      document.employee_form.reset();
      // submit();
    }

    function alertwin() {
      //   alert("Welcome====>" + First_Name);
      navigate("/user2", {
        state: {
          fname: First_Name,
          lname: Last_Name,
          email: Email,
          age: Age,
          emp: Employee_Id,
          domain: Domain,
          phone: Phone_Number,
        },
      });
    }
  }
  function web_jsonData() {
    return (
      <>
        {(() => {
          const dataCollect = [];
          for (let i = 0; i < data.length; i++) {
            dataCollect.push(
              // <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div onClick={web_alert} >
                  <Card
                    style={{
                      width: 400,
                      // backgroundColor: "white",
                      color: "black",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      border: "2px solid black",
                      margin: "30px",
                      cursor: "pointer",
                    }}
                  >
                    <CardContent className="Jcard" >
                      <Typography variant="h5" component="h2">
                        <b>ID</b> : {data[i].id}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Name</b> : {data[i].name}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>UserName</b> : {data[i].username}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Email</b> : {data[i].email}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>
                          <u>Address</u>
                        </b>
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Street</b> : {data[i].address.street}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Suite</b> : {data[i].address.suite}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>City</b> : {data[i].address.city}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Zipcode</b> : {data[i].address.zipcode}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>
                          <u>Geo</u>
                        </b>
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Lat</b> : {data[i].address.geo.lat}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <b>Lng</b> : {data[i].address.geo.lng}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              // </ThemeContext.Provider>
            );
            function web_alert() {
              navigate("/user2", {
                state: {
                  id: data[i].id,
                  name: data[i].name,
                  username: data[i].username,
                  email: data[i].email,
                  street: data[i].address.street,
                  suite: data[i].address.suite,
                  city: data[i].address.city,
                  zipcode: data[i].address.zipcode,
                  lat: data[i].address.geo.lat,
                  lng: data[i].address.geo.lng,
                },
              });
            }
          }
          return dataCollect;
        })()}
      </>
    );
  }

  return (

      <div>
        <div className="App" >

          <header className="App-header">
            <form className="form" name="employee_form" ref={form}>
              <fieldset className="field">
                <center>
                  <legend className="head">
                    <u>Employee Details</u>
                  </legend>
                </center>
                <p>
                  <label>First Name:</label>
                  <input
                   
                    type="text"
                    className="firstname"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  <br></br>
                </p>
                <p>
                  <label>Last Name:</label>
                  <input
                    
                    type="text"
                    className="lastname"
                    onChange={(event) => setTitle1(event.target.value)}
                  />
                  <br></br>
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    
                    type="text"
                    className="email"
                    onChange={(event) => setTitle6(event.target.value)}
                  />
                  <br></br>
                </p>
                <p>
                  <label>Emp.ID:</label>
                  <input
                    
                    type="text"
                    className="empid"
                    onChange={(event) => setTitle2(event.target.value)}
                  />
                  <br></br>
                </p>
                <p>
                  <label>Age:</label>
                  <input
                    
                    type="text"
                    className="age"
                    onChange={(event) => setTitle3(event.target.value)}
                  />
                  <br></br>
                </p>
                <p>
                  <label>Domain:</label>
                  <input
                    
                    type="text"
                    className="domain"
                    onChange={(event) => setTitle4(event.target.value)}
                  />
                  <br></br>
                </p>
                <p>
                  <label>Phone No:</label>
                  <input
                    
                    type="text"
                    className="phone"
                    onChange={(event) => setTitle5(event.target.value)}
                  />
                  <br></br>
                </p>
                <center>
                  <input
                    
                    type="submit"
                    value="Submit"
                    className="submit_button"
                    onClick={submit}
                  />
                </center>
              </fieldset>
            </form>
            <div id="card_box">{Total_card_items}</div>
            <div >{web_jsonData()}</div>
          </header>
        </div>
      </div>
    // </ThemeContext.Provider>
  );
}

export default User;
