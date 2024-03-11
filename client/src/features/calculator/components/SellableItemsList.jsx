import React, {useMemo} from 'react';
import CardSellableItem from './CardSellableItem';
import CustomSellableItem from './CustomSellableItem';

import TotalField from './TotalField';
import Grid from '@mui/material/Grid';
import { useCalculatorContext } from '../hooks/useSellableContext';
import { useSellableItems } from '../hooks/useSellableItems';
import separateNumbers from '../utils/separateNumbers';

export default function CalculatorItemsList() {
  const { total } = useCalculatorContext();
  const sellableItems = useSellableItems();

  const memoizedSellableItems = useMemo(() => sellableItems, [sellableItems]);

  return (
    <Grid container direction={'row'} spacing={2} justifyItems={'center'} columns={{ xs: 4, sm: 8, lg: 12 }}>
      <CustomSellableItem index={"zenis"}  item={{value: 1, thumbUrl: "https://dbz-dokkanbattle.com/img/points/zenis.png"}}/>
      {memoizedSellableItems.map((card, index) => {
          console.log('mapped')
          return <CardSellableItem key={index} index={index} card={{...card}} />
      })}
      <TotalField total={total} />
    </Grid>
  );
}
