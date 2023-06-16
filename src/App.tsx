import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"
import { Header } from "./pages/components/Header"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
