import React from "react"
import { useTheme } from "../theme/theme-provider"
import ToggleTheme from "./ToggleTheme"
import SearchDialog from "./SearchDialog"

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div>
        <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
          <span
            className={`${theme === "dark" ? "text-white" : "text-slate-500"}`}
          >
            Skyline
          </span>

          <span
            className={`${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Weather🌤️
          </span>
        </h1>
      </div>

      <div className="flex shrink-0 w-full gap-2 sm:w-fit">
        {/* Search Input */}
        <SearchDialog />
        {/* theme */}
        <ToggleTheme />
        {/* <div onClick={() => setTheme("light")}>toggle</div> */}
      </div>
    </div>
  )
}

export default Navbar
