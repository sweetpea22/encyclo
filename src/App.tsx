import React from 'react';
import { ThemeProvider, createTheme } from "@chainsafe/common-theme"
import { CssBaseline, Router } from "@chainsafe/common-components"
import "@chainsafe/common-theme/dist/font-faces.css"
import Routes from "./Components/Routes"

const theme = createTheme({
  globalStyling: {
    body: {
    },
  },
  themeConfig: {
    typography: {
      h1: {
        fontSize: "72px",
        lineHeight: "80px",
      },
      h2: {
        fontSize: "48px",
        lineHeight: "56px",
      },
      h3: {
        fontSize: "30px",
        lineHeight: "38px",
      },
      h4: {
        fontSize: "24px",
        lineHeight: "28px"
      }
    }
  }
})


const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
    </ThemeProvider>
  )
}

export default App;
