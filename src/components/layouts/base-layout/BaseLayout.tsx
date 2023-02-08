
import React, { PropsWithChildren, ReactNode, Suspense, useState } from 'react';
import Head from 'next/head';
import { useWindowSize } from '@/hooks/useWindowSize';

import navigation from '@/data/navigation';
import { useRouter } from 'next/router';
// import Header from './Header';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import styles from './BaseLayout.module.scss';

interface IProps {
  title?: string;
  pageType?: string;
  children: ReactNode;
}

export const BaseLayout: React.FC<IProps> = (props) => {
  const { title = 'Viewer', pageType = undefined } = props;
  const router = useRouter();
  // const window = useWindowSize();
  // const isRenderPage = pageType && pageType === 'render';
  // let height = undefined
  // if (window) {
  //   height = window.height
  // }
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      console.log({ currPos })
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    undefined,
    true,
    300
  )


  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head> */}
      <header className={`fixed top-0 left-0 right-0 h-[75px] w-full 
       backdrop-filter backdrop-blur-lg 
      px-4 py-2 shadow-2xl transition ${hideOnScroll ? 'duration-150 -translate-y-full ease-in transform-gpu' : ' ease-out'}`}
      >
        <div className="flex items-center">
          
        </div>
      </header>


      {props.children}


    </>
  );
};

BaseLayout.displayName = 'BaseLayout';
