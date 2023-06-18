import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Router } from "./Router"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Router />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
