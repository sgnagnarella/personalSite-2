"use client"

// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React  from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export function ThemeToggle(){
  const [dark, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') { 
      const storedDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(storedDarkMode); // Update state with localStorage value

      if (storedDarkMode) {
        document.body.classList.add('dark'); 
      }
    }
  }, []); 

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', newDarkMode.toString());
  };
  
  return(
      <button onClick={()=> darkModeHandler()}>
      {
        
        dark && <IoSunny /> // render sunny when dark is true
      }
      {
        !dark && <IoMoon /> // render moon when dark is false
      }
      </button>
  )
}