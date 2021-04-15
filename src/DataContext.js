import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    firstName: "Egor",
    lastName: "Cooleshov",
    email: "kulivers@mail.ru",
    hasTelephoneNumber: false,
    telephoneNumber: "",
    files: null,
  });
  const setValues = (values) => {
    setData((prevState) => ({ ...prevState, ...values }));
  };
  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
