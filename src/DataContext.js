import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hasTelephoneNumber: false,
    telephoneNumber: "",
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
