import React from "react";
import styles from "./section_header.module.css";
import { montserrat } from "@/fonts/fonts";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <div className={`${styles.title}`}>{title}</div>
    </div>
  );
};

export default SectionHeader;
