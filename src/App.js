import React from "react";
import User from "./Components/User";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import ApiCalendar from "./Components/ApiCalendar";
import MyTable from "./Components/Table";
import Crud from "./Components/Crud";
import UpdateForm from "./Components/UpdateForm";
import { Routes, Route } from "react-router-dom";
import User2 from "./Components/user2";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchButton from "./Button";
import CreateForm from "./Components/CreateForm";
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
            <Route path="Apicalendar" element={<ApiCalendar />} />
            <Route path="table" element={<MyTable />} />
            <Route path="CRUD" element={<Crud />} />
            <Route path="Form" element={<CreateForm />} />
            <Route path="UpdateForm" element={<UpdateForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
