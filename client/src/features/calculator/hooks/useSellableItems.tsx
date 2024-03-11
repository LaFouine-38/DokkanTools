import { useEffect, useState } from "react";
import { sellableItemsData } from '../utils/data.js';

export const useSellableItems = () => {
  const [sellableItems, setSellableItems] = useState(sellableItemsData);

  useEffect(() => {
    console.log('useeffect sellableItems');
    setSellableItems(prevSellableItems => prevSellableItems);
  }, []); 

  return sellableItems;
};