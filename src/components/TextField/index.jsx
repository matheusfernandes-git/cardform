import styles from "./style.module.css";

export default function TextField({
  type,
  label,
  placeholder,
  value,
  handleValue,
  teste
}) {
  const handleChange = (e) => {
    handleValue(e.target.value);
  };

  return (
    <div className={styles.text_field}>
      <label>{label}</label>
      <input
        maxLength={teste}
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
