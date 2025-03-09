import React from "react";
import styles from "./section_header.module.css";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title}`}>{title}</div>
    </div>
  );
};

export default SectionHeader;
