import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Teste</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
