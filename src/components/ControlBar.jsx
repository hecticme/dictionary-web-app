import { BiBook } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { ToggleBtn } from "./ToggleBtn";
import { ImSun } from "react-icons/im";
import { useState } from "react";

export function ControlBar() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className="control-bar">
      <BiBook className="icon page-logo" />

      <div className="btns">
        <div className="btns__change-font">
          <MdOutlineKeyboardArrowDown className="icon" />
        </div>
        <div className="btns__toggle-theme">
          <ToggleBtn onClick={toggleTheme} />

          {darkTheme ? <FiMoon className="icon" /> : <ImSun className="icon" />}
        </div>
      </div>
    </div>
  );
}
