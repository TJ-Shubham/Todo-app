import ToggleButton from "./ToggleButton"


function Header() {
  return (
    <div className="flex justify-between items-center">
        <h1 className="uppercase text-white font-bold text-3xl tracking-[.4rem] md:text-4xl md:tracking-[.8rem]" >todo</h1>
        <ToggleButton />
    </div>
  )
}

export default Header