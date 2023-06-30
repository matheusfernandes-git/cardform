export default function TextFild({
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
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
