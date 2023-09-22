import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const BaseClassSwitch = "cursor-pointer transition-all ease-linear";

export default function SwitchTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    if (darkMode) document.getElementsByTagName("HTML")[0].className = "light";
    else document.getElementsByTagName("HTML")[0].className = "dark";
  };

  const setMode = () => {
    setDarkMode(!darkMode);
    switchMode();
  };

  return (
    <>
      {darkMode ? (
        <FiSun
          className={"hover:text-yellow-500 " + BaseClassSwitch}
          onClick={() => setMode()}
        />
      ) : (
        <FiMoon
          className={"hover:text-blue-600 " + BaseClassSwitch}
          onClick={() => setMode()}
        />
      )}
    </>
  );
}
