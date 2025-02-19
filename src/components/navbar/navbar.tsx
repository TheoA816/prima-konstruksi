"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`${styles.container} ${isVisible ? "" : styles.hidden}`}>
      <Image
        className={styles.link}
        src="/logo.svg"
        alt="Logo"
        width={150}
        height={60}
      />
      <div className={styles.links}>
        <span className={styles.link}>About</span>
        <span className={styles.link}>Services</span>
        <span className={styles.link}>Portfolio</span>
        <span className={styles.link}>Contact</span>
      </div>
    </div>
  );
};

export default NavBar;
