import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import { theme, globalStyles } from '../styles';

import 'normalize.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
