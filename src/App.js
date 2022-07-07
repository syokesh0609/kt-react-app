import React from "react";
import User from "./Components/User";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import ApiCalendar from "./Components/ApiCalendar";
import { Routes, Route } from "react-router-dom";
import User2 from "./Components/user2";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchButton from "./Button";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App">
      <SwitchButton />

      <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user2" element={<User2 />} />
            {/* <Route path="calendar" element={<MyCalendar />} /> */}
            <Route path="Apicalendar" element={<ApiCalendar />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
