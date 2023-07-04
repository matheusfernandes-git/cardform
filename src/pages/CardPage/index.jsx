import Card from "components/Card";
import Form from "components/Form";
import styles from "./styles.module.css";
import { MyProvider } from "components/context/Provider";
import { useState } from "react";
import imgComplete from "assets/icon-complete.svg";

export default function CardPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const handleSubmit = (data) => {
    setFormData(data);
    setIsFormSubmitted(true);
  };
  return (
    <section>
      <div className={styles.container_page}>
        <div className={styles.container_card}></div>
        <MyProvider>
          {isFormSubmitted ? (
            <section>
              <Card />
              <div className={styles.container_finished}>
                <img src={imgComplete} alt="ícone de completo" />
                <h1>THANK YOU!</h1>
                <p>We've added your card details</p>
                <button>Voltar</button>
              </div>
            </section>
          ) : (
            <div className={styles.container_form_page}>
              <div>
                <Card />
                <Form onSubmit={handleSubmit} />
              </div>
            </div>
          )}
        </MyProvider>
      </div>
    </section>
  );
}
