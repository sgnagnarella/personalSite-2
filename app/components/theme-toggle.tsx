"use client"

// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

export function ThemeToggle(){
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }
  
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