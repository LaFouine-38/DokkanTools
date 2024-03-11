import React, { createContext, useContext, useState, useMemo } from 'react';

const CalculatorContext = createContext();

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculatorContext doit être utilisé à l\'intérieur de CalculatorProvider');
  }
  return context;
};

export const CalculatorProvider = ({ children }) => {
  const [sellableItemFieldValues, setSellableItemFieldValues] = useState([]);
  const [total, setTotal] = useState(0);

  const updateSellableItem = (index, item) => {
    const newSellableItemFieldValues = {...sellableItemFieldValues};
    newSellableItemFieldValues[index] = {...item};
    setSellableItemFieldValues(newSellableItemFieldValues);
    
    const newTotal = Object.values(newSellableItemFieldValues).reduce((acc, item) => acc + (parseFloat(item.value) * parseFloat(item.dataValue)), 0);
    setTotal(newTotal);
  };

  const contextValue = {
    sellableItemFieldValues,
    total,
    updateSellableItem,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
