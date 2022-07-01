// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import { createContext, useState } from "react";
import "./App.css";

 
export const ThemeContext = createContext(null);



  


function Home() {
const [theme, setTheme] = useState("light");
const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  //   let history = useHistory();

  //   function handleClick() {
  //     history.push("/user");
  //   }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
      <div id={theme} className='homediv'>
      
      <div className="App" id={theme}>
      <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
    
      <h1>This is the home page</h1>
      {/* <button onClick={handleClick}>Go back</button> */}
    </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default Home;
