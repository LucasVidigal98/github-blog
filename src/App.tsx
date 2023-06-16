import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Home } from "./pages/home"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
