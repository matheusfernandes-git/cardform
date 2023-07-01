import Card from "components/Card";
import Form from "components/Form";
import styles from "./styles.module.css";
import { MyProvider } from "components/context/Provider";

export default function CardPage() {
  // const [values, setValues] = useState({});
  // const addValues = (formValues) => {
  //   let newObj = { ...values };
  //   newObj = formValues;
  //   setValues(newObj);
  // };

  return (
    <div className={styles.container_page}>
      <div className={styles.container_card}></div>
      <MyProvider>
        <Card />
        <div className={styles.container_form_page}>
          <Form />
        </div>
      </MyProvider>
    </div>
  );
}

// values={values}
// addValues={addValues}
