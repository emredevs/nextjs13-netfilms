import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./style.module.css";
export default function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href={"/"} className={styles.logo}>
          <FaPlayCircle />
          NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href={"/"}>MOVIES</Link>
          <Link href={"/"}>SERIES</Link>
          <Link href={"/"}>SERIES</Link>
        </nav>
      </div>
    </header>
  );
}
