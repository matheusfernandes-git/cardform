import { useState } from "react";
import { MyContext } from "..";

export const MyProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [showSlash, setShowSlash] = useState(false);
  const [error, setError] = useState({});

  return (
    <MyContext.Provider
      value={{
        name,
        setName,
        number,
        setNumber,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
        showSlash,
        setShowSlash,
        error,
        setError,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
