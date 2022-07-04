import React from "react";
import User from "./Components/User";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
import User2 from "./Components/user2";
import  { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import  SwitchButton  from "./Button";
import "./App.css"

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App">
      {/* <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" onChange={SwitchButton} />
              <div className="slider round"></div>
            </label>
            <span>🌒</span>
          </div> */}
          {/* <button onClick={SwitchButton()}>Button</button> */}
          <SwitchButton />
      <div className="dark">
        <div  className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user2" element={<User2 />} />
          </Route>
        </Routes>
      </div>
    </div>
    </div>
  );
}


export default App;
