import styles from "./styles.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.container_extras}>
        <div className={styles.div_extra}></div>
        <div className={styles.div_extra2}></div>
      </div>
      <div className={styles.container_number}>
        <h2>0000 0000 0000 0000</h2>
      </div>
      <div className={styles.infos}>
        <span>MATHEUS FERNANDES</span>
        <span>00/00</span>
      </div>
    </div>
  );
}
