import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import { theme, globalStyles } from '../styles';

import 'normalize.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
