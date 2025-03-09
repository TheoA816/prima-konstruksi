import React from "react";
import styles from "./services.module.css";
import SectionHeader from "@/components/section_header/section_header";
import Card from "./card/card";
import { satoshi } from "@/fonts/fonts";

const Services = () => {
  return (
    <div className={`${styles.container} ${satoshi.className}`}>
      <SectionHeader title="Expertise" />
      <span className={styles.desc}>
        We provide <span className={styles.bold}>reliable, high-quality</span>{" "}
        construction services that turn your ideas into reality. We are
        committed in delivering projects on{" "}
        <span className={styles.bold}>time,</span> on{" "}
        <span className={styles.bold}>budget,</span> where we always put{" "}
        <span className={styles.bold}>attention to detail.</span>
      </span>
      <div className={styles.services}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
