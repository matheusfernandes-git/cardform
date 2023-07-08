import { useContext } from "react";
import styles from "./style.module.css";
import { MyContext } from "components/context";

export default function TextField({
  type,
  label,
  placeholder,
  value,
  handleValue,
  isError
}) {
  const { error } = useContext(MyContext);
  console.log(error.number);
  const handleChange = (e) => {
    handleValue(e.target.value);
  };

  return (
    <div className={styles.text_field}>
      <label>{label}</label>
      <input
        className={isError && styles.input_error}
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
