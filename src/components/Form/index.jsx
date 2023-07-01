import TextField from "components/TextField";
import { useState } from "react";
import styles from "./styles.module.css";
import SmallerTextField from "components/SmallerTextField";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        </div>
        <button className="mt-4" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
