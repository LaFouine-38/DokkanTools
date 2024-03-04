import React from 'react';
import ReactDOM from 'react-dom';
import MainBox from '../../components/MainBox.jsx'; // Importez votre composant principal
import MainBoxContainer from '../../components/MainBoxContainer.jsx';
import MainTitle from '../../components/MainTitle.jsx';
import { Grid, Paper } from '@mui/material'

export default function Calc() {
    return (
        <MainBoxContainer>
            <MainBox>
                <MainTitle>CALC</MainTitle>
                <Grid container justifyItems={'center'} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={1} sm={2} md={3} key={index}>
                            <Paper>xs=2</Paper>
                        </Grid>
                    ))}
                </Grid>
            </MainBox>
        </MainBoxContainer>
    )
}

