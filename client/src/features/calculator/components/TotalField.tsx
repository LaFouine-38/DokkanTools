import React from 'react'
import IconThumb from '../../../shared/components/thumbs/IconThumb'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
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

interface TotalFieldProps extends JSX.Element {
    total: number,
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    customKey?: string
}

export default function TotalField({ total, customKey, ...props }: TotalFieldProps): JSX.Element {
    const sx = styleSheet.CardSellableItem;

    /**
     * Handle the change event for the input element.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event object representing the change event.
     * @return {void} This function does not return anything.
     */

    return (
        <Grid sx={sx} xs={2} sm={4} lg={6} item>
            <IconThumb src="data:image/png;base64,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" margin={"2rem 30px 2rem 30px"}  />
            <TextField type='text' value={separateNumbers(total)} variant='outlined' fullWidth />
        </Grid>
    );
}
