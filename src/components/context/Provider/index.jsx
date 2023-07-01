import { useState } from "react";
import MyContext from "..";

const MyProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <MyContext.Provider
      value={{ name, setName, number, setNumber, date, setDate, cvc, setCvc }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider };
