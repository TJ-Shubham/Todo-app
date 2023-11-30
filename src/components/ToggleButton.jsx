// import sunIcon from "/icon-sun.svg";
import moonIcon from "/icon-moon.svg"


function ToggleButton() {
  return (
    <div>
        <button>
            <img src={moonIcon} alt="its sun icon svg" />
        </button>
        {/* <button>
            <img src={sunIcon} alt="its sun icon svg" />
        </button> */}
    </div>
  )
}

export default ToggleButton