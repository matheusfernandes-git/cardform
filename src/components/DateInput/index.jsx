export default function DateInput({ placeholder, value, handleValue, label, teste }) {
  const handleChange = (e) => {
    handleValue(e.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          style={{ width: '100px' }}
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
