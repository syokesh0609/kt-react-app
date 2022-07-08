// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import { createContext, useState } from "react";
import "./App.css";

// export const ThemeContext = createContext(null);

function Home() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };
  //   let history = useHistory();

  //   function handleClick() {
  //     history.push("/user");
  //   }
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>

    <div className="App">
      <header className="App-header">
        <h1 className="home1">This is the home page</h1>
        {/* <button onClick={handleClick}>Go back</button> */}
      </header>
    </div>

    // </ThemeContext.Provider>
  );
}

export default Home;
