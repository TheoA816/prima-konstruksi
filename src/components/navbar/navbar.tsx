"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { manrope } from "@/fonts/fonts";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const matches = useMediaQuery("(min-width:774px)");

  // Removes navbar when scrolling down and shows it when scrolling up
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
    <div
      className={`${styles.container} ${isVisible ? "" : styles.hidden} ${
        manrope.className
      }`}
    >
      <Image
        className={styles.link}
        src="/logo.svg"
        alt="Logo"
        width={matches ? 150 : 100}
        height={matches ? 60 : 40}
      />
      {matches ? (
        <div className={styles.links}>
          <span className={styles.link}>About</span>
          <span className={styles.link}>Services</span>
          <span className={styles.link}>Portfolio</span>
          <span className={styles.link}>Contact</span>
        </div>
      ) : (
        <>
          {toggleMenu ? (
            <CloseIcon
              className={styles.menu}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <MenuIcon
              className={styles.menu}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {toggleMenu && (
            <div className={styles.mobileLinks}>
              <span className={styles.mobileLink}>About</span>
              <span className={styles.mobileLink}>Services</span>
              <span className={styles.mobileLink}>Portfolio</span>
              <span className={styles.mobileLink}>Contact</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavBar;
