import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './modules/core/design_system/theme.tsx'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
