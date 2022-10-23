import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Management Chat App</title>
        <meta name="viewport" content="Trang quản lý kênh chat" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
