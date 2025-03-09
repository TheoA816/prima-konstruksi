import React from "react";
import styles from "./services.module.css";
import SectionHeader from "@/components/section_header/section_header";
import Card from "./card";

const Services = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="Expertise" />
      <span className={styles.desc}>
        We provide reliable, high-quality construction services that turn your
        ideas into reality. We are committed in delivering projects on time, on
        budget, where we always put attention to detail.
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
