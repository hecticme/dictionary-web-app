import { BiBook } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { ToggleBtn } from "./ToggleBtn";
import { ImSun } from "react-icons/im";
import { useTheme } from "../contexts/ThemeContext";

export function ControlBar() {
  const [darkTheme] = useTheme();

  return (
    <div className="control-bar">
      <BiBook className="icon page-logo" />

      <div className="btns">
        <div className="btns__toggle-theme">
          <ToggleBtn />

          {darkTheme ? <FiMoon className="icon" /> : <ImSun className="icon" />}
        </div>
      </div>
    </div>
  );
}
