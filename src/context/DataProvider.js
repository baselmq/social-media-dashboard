import React, { createContext, useContext } from "react";
import useFetchData from "../hooks/useFetchData";
import { FormCxt } from "./FormContext";

export const DataCxt = createContext();
DataCxt.displayName = "Data";

export const DataProvider = ({ url, email, children }) => {
  const { data, loading, error } = useFetchData(url, email);

  return (
    <DataCxt.Provider value={data}>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {children}
    </DataCxt.Provider>
  );
};

export const DataConsumer = () => {
  const data = useContext(DataCxt);
  const isEmpty = Array.isArray(data) && data.length === 0;
  return (
    <div>
      {isEmpty
        ? "Email is not registered"
        : data
        ? JSON.stringify(data)
        : "No data found"}
    </div>
  );
};
