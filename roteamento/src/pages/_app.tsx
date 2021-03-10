import React from 'react';
import Head from 'next/head';

import GlobalStyles from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Roteamento Dinâmico</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
