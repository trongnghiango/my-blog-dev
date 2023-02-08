import React, { PropsWithChildren, ReactNode, Suspense } from 'react';
import Head from 'next/head';
import { useWindowSize } from '@/hooks/useWindowSize';
import styles from './MainLayout.module.scss'
import Navbar from '../Navbar';
import Tabbar from '../Tabbar';
import navigation from '@/data/navigation';
import { useRouter } from 'next/router';

interface IProps {
  title?: string;
  pageType?: string;
  children: ReactNode;
}

export const MainLayout: React.FC<IProps> = (props) => {
  const { title = 'Viewer', pageType = undefined } = props;
  const window = useWindowSize();
  const router = useRouter();
  // const isRenderPage = pageType && pageType === 'render';
  // let height = undefined
  // if (window) {
  //   height = window.height
  // }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <>
        <div className={styles.container}>
          <Navbar
            navigationData={navigation}
            currentRoute={router.asPath}
          />
          <div className='overflow-auto'>
            {props.children}
          </div>
          <Tabbar
            navigationData={navigation}
            currentRoute={router.asPath}

          />
        </div>
      </>
    </>
  );
};

MainLayout.displayName = 'MainLayout';
