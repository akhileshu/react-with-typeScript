import { useContext } from "react";
import { ThemeContext } from "./App";

function Box() {
  // using the context in any component no matter what's the hierarchy
  const { theme, toggleThem } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add this line for box shadow
        padding: "20px", // Add padding to make it visually appealing
      }}
    >
      <h1>Box</h1>
      <button onClick={toggleThem}>change theme</button>
    </div>
  );
}

export default Box;
