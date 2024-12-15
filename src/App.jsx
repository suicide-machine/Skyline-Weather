import React from "react"
import Navbar from "./components/shared/Navbar"
import { ThemeProvider } from "./components/theme/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
        <Navbar />
      </main>
    </ThemeProvider>
  )
}

export default App
