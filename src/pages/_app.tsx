import React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'
import "react-activity/dist/library.css";
import { NavigationTopBanner } from '../features/NavigationTopBanner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-gray-50'>
      <NavigationTopBanner />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;