import React from "react"
import { useTheme } from "../theme/theme-provider"
import { Moon, Sun } from "lucide-react"

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center cursor-pointer transition-transform duration-500 ${
        isDark ? "rotate-180" : "rotate-0"
      }`}
    >
      {isDark ? (
        <Sun className="h-7 w-7 text-yellow-400 rotate-0 transition-all" />
      ) : (
        <Moon className="h-7 w-7 text-blue-600 rotate-0 transition-all" />
      )}
    </div>
  )
}

export default ToggleTheme
