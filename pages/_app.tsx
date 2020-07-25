import React from 'react';
import { withUrqlClient, NextUrqlAppContext } from 'next-urql';
import NextApp, { AppProps } from 'next/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import fetch from 'isomorphic-unfetch';

import { GRAPHQL_ENDPOINT } from '../lib/consts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

App.getInitialProps = async (ctx: NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return { ...appProps };
};

export default withUrqlClient((_ssrExchange, ctx) => ({
  url: GRAPHQL_ENDPOINT || 'http://localhost:3000/api/graphql',
  fetchOptions: {
    headers: {
      Cookie: ctx?.req?.headers.cookie ?? '',
    },
  },
  fetch,
}))(
  // @ts-ignore
  App
);
