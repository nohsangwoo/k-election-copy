import React from 'react'
import Router from 'router'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
// import { darkTheme, lightTheme } from 'styles/theme'
import { lightTheme } from 'styles/theme'
import { RecoilRoot } from 'recoil'
// import { useRecoilValue } from 'recoil'
// import { darkModeState } from 'atoms/globalStylesAtom'
import { GlobalStyles } from 'styles/globalStyles'

function App() {
  // const isDarkMode = useRecoilValue(darkModeState)
  return (
    <RecoilRoot>
      <HelmetProvider>
        {/* <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}> */}
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </RecoilRoot>
  )
}

export default App
