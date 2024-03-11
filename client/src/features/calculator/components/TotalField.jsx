import React, { memo, useContext, useEffect } from 'react'
import IconThumb from '../../../shared/components/IconThumb'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
// import { SellableCard } from 'typings/Card'
import { CalculatorContext } from '../hooks/useSellableContext'
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

export default function TotalField({ total, customKey, ...props }) {
    const sx = styleSheet.CardSellableItem;

    console.log(customKey, 'rendered');

    /**
     * Handle the change event for the input element.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event object representing the change event.
     * @return {void} This function does not return anything.
     */

    return (
        <Grid sx={sx} xs={2} sm={4} lg={6} item>
            <IconThumb margin={"2rem 30px 2rem 30px"}  />
            <TextField type='text' value={separateNumbers(total)} variant='outlined' fullWidth />
        </Grid>
    );
}
