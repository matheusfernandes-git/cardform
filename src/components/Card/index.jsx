import React, { useContext } from "react";
import styles from "./styles.module.css";
import { MyContext } from "components/context";

export default function Card() {
  const { name, number, month, year, cvc, showSlash } = useContext(MyContext);

  // Remove todos os espaços em branco do número do cartão
  const strippedNumber = number.replace(/\s/g, "");

  // Adiciona um espaço a cada 4 dígitos usando uma expressão regular
  const formattedNumber = strippedNumber.replace(/\d{4}(?=.)/g, "$& ");

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.container_extras}>
          <div className={styles.div_extra}></div>
          <div className={styles.div_extra2}></div>
        </div>
        <div className={styles.container_number}>
          <h2>{formattedNumber}</h2>
        </div>
        <div className={styles.infos}>
          <span>{`${name.toUpperCase()}`}</span>
          {showSlash && <span>{`${month}/${year}`}</span>}
        </div>
      </div>
      <div className={styles.back_card}>
        <span>{cvc}</span>
      </div>
    </section>
  );
}
