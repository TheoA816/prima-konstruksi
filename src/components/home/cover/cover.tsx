import React from "react";
import styles from "./cover.module.css";
import Image from "next/image";

const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slogan}>
        <span className={styles.title}>
          Building <span className={styles.special}>Dreams</span>
          <br />
          <span className={styles.subtitle}>One Brick At a Time</span>
        </span>
        <div className={styles.divider}></div>
        <span className={styles.desc}>
          Expert Construction Services · Tailored to Your Vision
        </span>
      </div>
      <div className={styles.background}>
        <Image
          className={styles.image}
          src="/home_bg.jpg"
          alt="Cover Background"
          width={1000}
          height={1100}
        />
      </div>
    </div>
  );
};

export default Cover;
