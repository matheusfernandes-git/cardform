import Card from "components/Card";
import Form from "components/Form";
import styles from "./styles.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useContext, useState } from "react";
import imgComplete from "assets/icon-complete.svg";
import { MyContext } from "components/context";

export default function CardPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    setName,
    setNumber,
    setCvc,
    setMonth,
    setYear,
    setShowSlash
  } = useContext(MyContext);

  const handleGoBack = () => {
    setIsFormSubmitted(!isFormSubmitted);
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvc("");
    setShowSlash("");
  };

  return (
    <section className={styles.container_page}>
      <div className={styles.container_card}></div>
      {!isFormSubmitted ? (
        <div className={styles.container_form_page}>
          <Card />
          <Form onSubmit={() => setIsFormSubmitted(!isFormSubmitted)} />
        </div>
      ) : (
        <section>
          <Card />
          <div className={styles.container_finished}>
            <img src={imgComplete} alt="ícone de completo" />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <button className={styles.back_button} onClick={handleGoBack}>
              <BiArrowBack size={22} />
              Voltar
            </button>
          </div>
        </section>
      )}
    </section>
  );
}
