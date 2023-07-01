import React, { useContext } from "react";
import styles from "./styles.module.css";
import MyContext from "components/context";

const Card = () => {
  const { name, number, date, cvc } = useContext(MyContext);

  return (
    <section className={styles.container}>
      <div className={styles.teste}>
        <div className={styles.card}>
          <div className={styles.container_extras}>
            <div className={styles.div_extra}></div>
            <div className={styles.div_extra2}></div>
          </div>
          <div className={styles.container_number}>
            <h2>{number}</h2>
          </div>
          <div className={styles.infos}>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className={styles.teste2}>
        <div className={styles.back_card}>
          <span>{cvc}</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
