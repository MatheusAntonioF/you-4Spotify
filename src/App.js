import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import light from './styles/theme/light';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
