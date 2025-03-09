import React from "react";
import Cover from "@/components/home/cover/cover";
import Services from "./services/services";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Cover />
      <Services />
    </div>
  );
};

export default Home;
