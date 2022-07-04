import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onClick = () => {
      if (darkMode)
        theme.dispatch({ type: "LIGHTMODE" });
      else
        theme.dispatch({ type: "DARKMODE" });
    };
  
    return (
    //   <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
    //     {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    //   </button>
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`} >
      <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={onClick} />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
    </div>
    );
  }