import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  rank: 12890,
  percentile: 37,
  currentScore: 7,
});

const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState({
    rank: 12890,
    percentile: 37,
    currentScore: 7,
  });

  useEffect(() => {
    const stored = localStorage.getItem("stored");
    console.log(stored);
    const storedObj = JSON.parse(stored);
    if (storedObj) {
      setDatas(storedObj);
    }
  }, []);

  const submitHandler = (payload) => {
    if (
      payload.currentScore <= 15 &&
      payload.currentScore >= 0 &&
      payload.percentile <= 100 &&
      payload.percentile >= 0 &&
      payload.rank > 0
    ) {
      localStorage.setItem("stored", JSON.stringify(payload));
      setDatas({ ...payload });
    }
    console.log(payload);
  };

  return (
    <DataContext.Provider value={{ datas, submitHandler }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
