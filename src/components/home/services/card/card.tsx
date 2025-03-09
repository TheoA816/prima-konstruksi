"use client";

import React, { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  bg?: string;
}

const Card = ({ title, desc, bg }: CardProps) => {
  const { hover, setHover } = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        className={styles.image}
        src={bg || "/commercial_card.jpg"}
        alt="Card Background"
        width={710}
        height={920}
      />
    </div>
  );
};

export default Card;
