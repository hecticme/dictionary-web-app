export function ToggleBtn(props) {
  const changeBtnStyle = () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    toggleBtn.classList.toggle("dark");
  };

  return (
    <div
      className="toggle-btn"
      onClick={() => {
        props.onClick();
        changeBtnStyle();
      }}
    >
      <div className="toggle-btn__circle"></div>
    </div>
  );
}
