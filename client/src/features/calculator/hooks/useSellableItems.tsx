import { useEffect, useState } from "react";
import { sellableItemsData } from '../utils/data.js';

export const useSellableItems = () => {
  const [sellableItems, setSellableItems] = useState(sellableItemsData);

  useEffect(() => {
    setSellableItems(prevSellableItems => prevSellableItems);
  }, []); 

  return sellableItems;
};