import styles from "./style.module.css";

export default function TextField({
  type,
  label,
  placeholder,
  value,
  handleValue,
}) {
  const handleChange = (e) => {
    handleValue(e.target.value);
  };

  return (
    <div className={styles.text_field}>
      <label>{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
