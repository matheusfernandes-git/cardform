import TextFild from "components/TextFild";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <TextFild
        type="text"
        label="CARD NAME"
        value={name}
        placeholder="type your card name"
        handleValue={(value) => setName(value)}
      />
      <TextFild
        type="number"
        label="CARD NUMBER"
        value={number}
        placeholder="type your card number"
        handleValue={(value) => setNumber(value)}
      />
      <TextFild
        type="number"
        label="DATE (MM/YY)"
        value={date}
        placeholder="type your card number"
        handleValue={(value) => setDate(value)}
      />
      <button type="submit">Confirm</button>
    </form>
  );
}
