// @src/components/Navbar/index.jsx
import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";

import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ navigationData, currentRoute }: any) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <CgMonday />
      </span>
      <ul className={styles.navItems}>
        {navigationData.map(({name, link}: any, index: number) => (
          <Link href={link} key={index}>
            <li
              className={classNames([
                styles.navItem,
                currentRoute === link && styles.selectedNavItem,
              ])}
              // key={index}
            // onClick={() => setCurrentRoute(item)}
            >
              {name}
            </li>
          </Link>
        ))}
      </ul>
      <button className={styles.actions}>Logout</button>
    </nav>
  );
};

export default Navbar;