import Card from "components/Card";
import Form from "components/Form";
import styles from "./styles.module.css";
import BackCard from "components/BackCard";

export default function CardPage() {
  return (
    <div className={styles.container_page}>
      <div className={styles.container_card}></div>;
      <Card />
      <BackCard />
      <div className={styles.container_form_page}>
        <Form />
      </div>
    </div>
  );
}
