"use client"

// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect }  from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export function ThemeToggle(){
  const [dark, setDark] = React.useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDark(storedDarkMode);
    if (storedDarkMode) {
      document.body.classList.add('dark');
    }
  }, []);

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
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