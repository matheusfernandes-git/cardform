import TextField from "components/TextField";
import { useContext, useState } from "react";
import styles from "./styles.module.css";
import MyContext from "components/context";
import DateInput from "components/DateInput";

export default function Form({ onSubmit }) {
  const {
    name,
    number,
    month,
    year,
    cvc,
    setName,
    setNumber,
    setMonth,
    setYear,
    setCvc,
    setShowSlash,
  } = useContext(MyContext);
  const [error, setError] = useState({});

  const validateCardNumber = () => {
    if (number.length !== 16) {
      setError((prevError) => ({
        ...prevError,
        number: "O número do cartão precisa ter 16 dígitos.",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        number: "",
      }));
    }
  };

  const validateCardCvc = () => {
    if (cvc.length !== 3) {
      setError((prevError) => ({
        ...prevError,
        cvc: "O número cvc precisa ter pelo menos 3 dígitos.",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        cvc: "",
      }));
    }
  };

  const handleMonthChange = (value) => {
    setMonth(value);
    setShowSlash(value !== "");
  };

  const handleYearChange = (value) => {
    setYear(value);
    setShowSlash(value !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateCardNumber();
    validateCardCvc();

    if(number.length === 16 && cvc.length === 3){
      onSubmit({
        name,
        number,
        month,
        year,
        cvc,
      });
    }


    // setName("");
    // setNumber("");
    // setMonth("");
    // setYear("");
    // setCvc("");
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
        {error.number && <span style={{ color: "red" }}>{error.number}</span>}
        <div className={styles.container_smaller_inputs}>
          <DateInput
            label="MONTH"
            value={month}
            placeholder="MM"
            handleValue={handleMonthChange}
          />
          <DateInput
            label="YEAR"
            value={year}
            placeholder="YY"
            handleValue={handleYearChange}
          />
          <div className={styles.container_cvc}>
            <label>CVC</label>
            <input
              required
              type="number"
              label="CVC"
              value={cvc}
              placeholder="ex 123"
              onChange={(e) => setCvc(e.target.value)}
            />
            {error.cvc && <span style={{ color: "red" }}>{error.cvc}</span>}
          </div>
        </div>
        <button className="mt-4" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
