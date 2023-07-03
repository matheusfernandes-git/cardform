import styles from "./style.module.css";

export default function DateInput({ placeholder, value, handleValue, label, teste }) {
  const handleChange = (e) => {
    handleValue(e.target.value);
  };
  return (
    <div className={styles.input_group}>
      <label>{label}</label>
      <div>
        <input
          required
          className={teste}
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
