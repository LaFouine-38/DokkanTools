import React, { memo, useCallback } from 'react'
import CharacterThumb from '../../../shared/components/thumbs/CharacterThumb'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { SellableCard } from 'typings/Card'
import { useCalculatorContext } from '../hooks/useSellableContext'

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

interface CardSellableItemProps extends JSX.Element {
    card: SellableCard,
    index: string | number,
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    customKey?: string
}

export default memo(function CardSellableItem({ card, index }: CardSellableItemProps): JSX.Element {
    const { updateSellableItem } = useCalculatorContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateSellableItem(index, { value: event.target.value || 0, dataValue: card.value});
    };

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        const key = e.key;
        if (key === "e" || key === "E" || key === "-" || key === "+") {
            e.preventDefault();
        }
    }, []);

    return (
        <Grid sx={styleSheet.CardSellableItem} xs={2} sm={4} lg={6} item>
            <CharacterThumb margin={"2rem 30px 2rem 30px"} cardData={card} />
            <TextField onKeyDown={handleKeyDown} type='number' onChange={handleChange} inputProps={{ 'data-value': card.value }} label={card.value} variant='outlined' fullWidth />
        </Grid>
    );
})
