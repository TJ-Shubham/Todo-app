import { useTheme } from "../contexts/ThemeProvider";
import moonIcon from "/icon-moon.svg"
import sunIcon from "/icon-sun.svg";

function ToggleButton() {

  const {themeMode, lightTheme, darkTheme} = useTheme();

  return (
    <div className="cursor-pointer px-2 transition duration-500 ease-in-out">
        {themeMode === "dark" ? 
          <button type="button" onClick={lightTheme}>
              <img src={sunIcon} alt="its sun icon svg" />
          </button> :
        <button type="button" onClick={darkTheme}>
            <img src={moonIcon} alt="its sun icon svg" />
        </button>}
    </div>
  )
}

export default ToggleButton
