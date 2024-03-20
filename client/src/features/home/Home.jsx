import React from 'react';
import MainBox from '../../shared/components/MainBox.jsx'; // Importez votre composant principal
import MainBoxContainer from '../../shared/components/MainBoxContainer.jsx';
import MainTitle from '../../shared/components/MainTitle.jsx';
import { Grid, Paper } from '@mui/material'
import GridButtonLink from '../../shared/components/GridButtonLink.tsx';
import { featuresRoutes } from './utils/featuresRoutes.js';

export default function Home() {
    return (
        <MainBoxContainer>
            <MainBox>
                <MainTitle>MENU PRINCIPAL</MainTitle>
                <Grid container spacing={{ xs: 2 }}>
                    {
                        featuresRoutes.map((route, index) => {
                            return <Grid item xs={12} sm={6} md={4} key={index}>
                                <GridButtonLink textName={route.textName} path={route.path} />
                            </Grid>
                        })
                    }
                </Grid>
            </MainBox>
        </MainBoxContainer>
    )
}

