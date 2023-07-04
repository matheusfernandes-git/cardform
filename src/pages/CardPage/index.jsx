import Card from "components/Card";
import Form from "components/Form";
import styles from "./styles.module.css";
import { MyProvider } from "components/context/Provider";
import { BiArrowBack } from "react-icons/bi";
import { useContext, useState } from "react";
import imgComplete from "assets/icon-complete.svg";
import { MyContext } from "components/context";

export default function CardPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   number: "",
  //   month: "",
  //   year: "",
  //   cvc: ""
  // });

  const handleGoBack = (value) => {
    setIsFormSubmitted(!isFormSubmitted);
    //   setFormData({
    //   name: "",
    //   number: "",
    //   month: "",
    //   year: "",
    //   cvc: ""
    // });
  };

  return (
    <MyProvider>
      <section>
        <div className={styles.container_page}>
          <div className={styles.container_card}></div>
          {!isFormSubmitted ? (
            <div className={styles.container_form_page}>
              <div>
                <Card />
                <Form onSubmit={() => setIsFormSubmitted(!isFormSubmitted)} />
              </div>
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
        </div>
      </section>
    </MyProvider>
  );
}
