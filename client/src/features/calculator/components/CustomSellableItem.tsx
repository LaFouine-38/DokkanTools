import React, { useCallback, memo } from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import IconThumb from 'shared/components/thumbs/IconThumb'
import { SellableItem } from 'typings/SellableItem'
import { useCalculatorContext } from '../hooks/useSellableContext'

const styleSheet = {
    "CustomSellableItem": {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        "@media (max-width: 600px)": {
            flexDirection: "column",
        }
    }
}

interface CustomSellableItemProps extends JSX.Element{
    index: string | number
    item: SellableItem,
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default memo(function CustomSellableItem({ index, item, onInput, ...props}: CustomSellableItemProps): JSX.Element {
    const sx = styleSheet.CustomSellableItem;

    const { updateSellableItem } = useCalculatorContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateSellableItem(index, { value: event.target.value || 0, dataValue: item.value});
    };

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        const key = e.key;
        if (key === "e" || key === "E" || key === "-" || key === "+") {
            e.preventDefault();
        }
    }, []);

    return (
        <Grid sx={sx} xs={2} sm={4} lg={6} item>
            <IconThumb src={item.thumbUrl} margin={"2rem 30px 2rem 30px"} />
            <TextField onKeyDown={handleKeyDown} type='number' onChange={handleChange} inputProps={{'data-value': item.value}} label={item.value} variant='outlined' fullWidth />
        </Grid>
    );
})
