import React from 'react';
import MainBox from './shared/components/MainBox.jsx'; // Importez votre composant principal
import MainBoxContainer from './shared/components/MainBoxContainer.jsx';
import MainTitle from './shared/components/MainTitle.jsx';
import { Grid, Paper } from '@mui/material'

export default function Home() {
    return (
        <MainBoxContainer>
            <MainBox>
                <MainTitle>Cartes</MainTitle>
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

