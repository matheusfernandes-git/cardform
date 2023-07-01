import TextField from "components/TextField";
import { useContext, useState } from "react";
import styles from "./styles.module.css";
import SmallerTextField from "components/SmallerTextField";
import MyContext from "components/context";

export default function Form() {
  const { name, number, date, cvc, setName, setNumber, setDate, setCvc } =
    useContext(MyContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (number.length < 16) {
      setError("Card number should be at least 16 digits.");
      return;
    }

    // Se passar pela validação, limpar o erro e prosseguir com o envio do formulário
    setError("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="CARD NAME"
          value={name}
          placeholder="type your card name"
          handleValue={(value) => setName(value)}
        />
        <TextField
          className={styles.teste}
          type="number"
          label="CARD NUMBER"
          value={number}
          placeholder="ex 1234 5678 9123 0000"
          handleValue={(value) => setNumber(value)}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div className={styles.container_smaller_inputs}>
          <SmallerTextField
            type="number"
            label="DATE (MM/YY)"
            value={date}
            placeholder="type your card date"
            handleValue={(value) => setDate(value)}
          />
          <SmallerTextField
            type="number"
            label="CVC"
            value={cvc}
            placeholder="ex 123"
            handleValue={(value) => setCvc(value)}
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
        <button className="mt-4" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
