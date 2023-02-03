import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '@/styles/App.module.css'
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'
import navigation from '@/data/navigation'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  // console.log({ router })
  return (

    <div className={styles.container}>
      <Navbar
        navigationData={navigation}
        currentRoute={router.asPath}

      />
      <>
        <Component {...pageProps} />
      </>
      <Tabbar
        navigationData={navigation}
        currentRoute={router.asPath}

      />
    </div>
  )
}
