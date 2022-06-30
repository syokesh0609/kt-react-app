import React from "react";
import User from "./Components/User";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
import User2 from "./Components/user2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user2" element={<User2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
