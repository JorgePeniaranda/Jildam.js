import React, { useState } from 'react'
import { FiMoon, FiSun } from "react-icons/fi";

const BaseClassSwitch = 'cursor-pointer transition-all ease-linear'

export default function SwitchTheme() {
    const [darkMode, setDarkMode] = useState(false);

    const switchMode = () => {
        if (darkMode) document.getElementsByTagName("HTML")[0].className = "light";
        else document.getElementsByTagName("HTML")[0].className = "dark";
    }

    const setMode = () => {
        setDarkMode(!darkMode);
        switchMode();
    }

    return (
        <>
            {darkMode ? <FiSun className={BaseClassSwitch + ' hover:text-yellow-500'} onClick={() => setMode()} /> : <FiMoon className={BaseClassSwitch + ' hover:text-blue-600'} onClick={() => setMode()} />}
        </>
    )
}
