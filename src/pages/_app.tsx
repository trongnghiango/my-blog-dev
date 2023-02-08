import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '@/styles/App.module.css'
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'
import Loader from '@/components/common/loader/Loader'
import navigation from '@/data/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

   useEffect(() => {
    setInitialRenderComplete(true);
  }, []);


  if (!initialRenderComplete) {
    return <>
      <Loader />
    </>
  } else {
    return (

      <>
        <Component {...pageProps} />
      </>

    )
  }
}
