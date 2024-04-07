import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import "./themeToggle.scss";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="themeToggle" onClick={toggleDarkMode}>
      {isDarkMode ? <CiLight /> : <MdDarkMode />}
    </div>
  );
};

export default ThemeToggle;
