import React, { memo, useCallback, useContext } from 'react'
import CharacterThumb from '../../../shared/components/Character/CharacterThumb'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
// import { SellableCard } from 'typings/Card'
import { SellableItemsContext, useCalculatorContext } from '../hooks/useSellableContext'
import separateNumbers from '../utils/separateNumbers'

const styleSheet = {
    "CardSellableItem": {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        "@media (max-width: 600px)": {
            flexDirection: "column",
        }
    }
}

// interface CardSellableItemProps extends JSX.Element {
//     card: SellableCard,
//     onInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
//     customKey?: string
// }

export default memo(function CardSellableItem({ card, index }) {
    console.log(index, 'rendered');
    const { updateSellableItem } = useCalculatorContext();

    const handleChange = useCallback((event) => {
        updateSellableItem(index, { value: event.target.value || 0, dataValue: card.value });
    }, []);

    const handleKeyDown = useCallback((e) => {
        const key = e.key;
        if (key === 'e' || key === 'E' || key === '-' || key === '+') {
            e.preventDefault();
        }
    });

    return (
        <Grid sx={styleSheet.CardSellableItem} xs={2} sm={4} lg={6} item>
            <CharacterThumb margin={"2rem 30px 2rem 30px"} cardData={card} />
            <TextField onKeyDown={handleKeyDown} type='number' onChange={handleChange} inputProps={{ 'data-value': card.value }} label={card.value} variant='outlined' fullWidth />
        </Grid>
    );
})
