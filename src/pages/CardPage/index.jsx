import Card from "components/Card";
import Form from "components/Form";
import styles from "./styles.module.css";
import { MyProvider } from "components/context/Provider";
import { useContext, useState } from "react";
import imgComplete from "assets/icon-complete.svg";
import MyContext from "components/context";


export default function CardPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const { setName, setNumber, setMonth, setYear, setCvc } = useContext(MyContext);
  const handleSubmit = (data) => {
    // setName(data.name);
    // setNumber(data.number);
    // setMonth(data.month);
    // setYear(data.year);
    // setCvc(data.cvc);
    setIsFormSubmitted(true);
  };

  const handleGoBack = () => {
    setIsFormSubmitted(!isFormSubmitted);
    // setName("");
    // setNumber("");
    // setMonth("");
    // setYear("");
    // setCvc("");
  }

  return (
    <MyProvider>
    <section>
      <div className={styles.container_page}>
        <div className={styles.container_card}></div>
          {isFormSubmitted ? (
            <section>
              <Card />
              <div className={styles.container_finished}>
                <img src={imgComplete} alt="ícone de completo" />
                <h1>THANK YOU!</h1>
                <p>We've added your card details</p>
                <button
                  className={styles.back_button}
                  onClick={handleGoBack}
                >
                  Voltar
                </button>
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
      </div>
    </section>
    </MyProvider>
  );
}
