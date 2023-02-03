import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

import styles from "./Tabbar.module.css";
import Link from "next/link";

const Tabbar = ({ navigationData, currentRoute}: any) => {
  const getTabIcon = useCallback((item: string) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Discover":
        return <AiFillCompass />;
      case "Store":
        return <BsFillBagFill />;
      case "Inbox":
        return <CgInbox />;
      case "Profile":
        return <BsFillPersonFill />;
    }
  }, []);

  return (
    <nav className={styles.tabbar}>
      {navigationData.map(({name, link}: any, index: number) => (
        <Link href={currentRoute} key={index}>
          <span
            // key={index}
            className={classNames([
              styles.tabItem,
              currentRoute === link && styles.tabItemActive,
            ])}
            // onClick={() => setCurrentRoute(item)}
          >
            <span className={styles.icon}>{getTabIcon(name)}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Tabbar;