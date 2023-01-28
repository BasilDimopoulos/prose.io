import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>prose.io</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
