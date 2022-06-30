import { useLocation } from "react-router-dom";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { Link } from "react-router-dom";

function User2() {
  // const [ Total_card_items , setItems] = useState([]);

  const location = useLocation();
  console.log(location.state);
  let a = location.state.emp;
  console.log(a);

  function card() {
    return (
      <>
        {(() => {
          const dataCollect = [];

          dataCollect.push(
            <div>
              <Card
                style={{
                  width: 400,
                  backgroundColor: "white",
                  color: "black",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  border: "2px solid black",
                  margin: "30px",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <b>ID</b> : {location.state.id}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Name</b> : {location.state.name}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>UserName</b> : {location.state.username}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Email</b> : {location.state.email}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b><u>Address</u></b>
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Street</b> : {location.state.street}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Suite</b> : {location.state.suite}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>City</b> : {location.state.city}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Zipcode</b> : {location.state.zipcode}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b><u>Geo</u></b>
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Lat</b> : {location.state.lat}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Lng</b> : {location.state.lng}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );

          return dataCollect;
        })()}
      </>
    );
  }

  function card1() {
    return (
      <>
        {(() => {
          const dataCollect = [];

          dataCollect.push(
            <div>
              <Card
                style={{
                  width: 400,
                  backgroundColor: "white",
                  color: "black",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  border: "2px solid black",
                  margin: "30px",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <b>FirstName</b> : {location.state.fname}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>LastName</b> : {location.state.lname}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Email</b> : {location.state.email}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Emp.ID</b> : {location.state.emp}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Age</b> : {location.state.age}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>Domain</b> : {location.state.domain}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <b>PhoneNumber</b> : {location.state.phone}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );

          return dataCollect;
        })()}
      </>
    );
  }

  if (a === undefined) {
    return (
      <div className="App">
        <Link to="/user" className="user1">
          Back
        </Link>
        <header className="App-header">
          <div> {card()}</div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Link to="/user" className="user1">
          Back
        </Link>
        <header className="App-header">
          <div> {card1()}</div>
        </header>
      </div>
    );
  }
}

export default User2;
