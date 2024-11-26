import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {theme} from './theme.ts';
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalProvider } from './GlobalContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalProvider>
      <App />
      </GlobalProvider>
    </ThemeProvider>
  </StrictMode>,
)
