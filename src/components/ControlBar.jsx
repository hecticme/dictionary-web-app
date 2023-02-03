import { BiBook } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

export function ControlBar() {
  return (
    <div className="control-bar">
      <BiBook className="icon page-logo" />

      <div className="btns">
        <div className="btns__change-font">
          <MdOutlineKeyboardArrowDown className="icon" />
        </div>
        <div className="btns__toggle-theme">
          <FiMoon className="icon" />
        </div>
      </div>
    </div>
  );
}
