"use client";

/* Functions */
import { useState } from "react";

/* Components */
import { FiMoon, FiSun } from "react-icons/fi";

/* Styles */
import styles from "./style.module.scss";

export const SwitchTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    let HTMLClassList = document.getElementsByTagName("HTML")[0].classList;

    if (darkMode) HTMLClassList.remove("dark");
    else HTMLClassList.add("dark");
    setDarkMode(!darkMode);
  };

  const props = {
    className: styles.darkSwitch,
    onClick: () => switchMode(),
  };

  return (
    <>
      {darkMode ? (
        <FiSun name="light" {...props} />
      ) : (
        <FiMoon name="dark" {...props} />
      )}
    </>
  );
};
