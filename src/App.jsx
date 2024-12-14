import React from "react"
import Navbar from "./components/shared/Navbar"
import { ThemeProvider } from "./components/theme/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <main>
        <Navbar />
      </main>
    </ThemeProvider>
  )
}

export default App
