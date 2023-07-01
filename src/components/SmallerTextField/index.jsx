import styles from './styles.module.css';

export default function SmallerTextField({
  placeholder,
  value,
  label,
  type,
  handleValue,
}) {
  const handleChange = (e) => {
    handleValue(e.target.value);
  };
  return (
    <div className={styles.container_smaller}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
