import React from 'react';
import ReactDOM from 'react-dom';
import MainBox from '../components/MainBox.jsx'; // Importez votre composant principal
import MainBoxContainer from '../components/MainBoxContainer.jsx';
import MainTitle from '../components/MainTitle.jsx';
import { Grid, Paper } from '@mui/material'
import { Link } from 'react-router-dom';
import Home from '../home.jsx';

export default function Calc() {
    return (
        <MainBoxContainer>
            <MainBox>
                <MainTitle>Bah alors, t'as cassé ton détecteur ?</MainTitle>
                <Link to="/">Retour à l'accueil</Link>
            </MainBox>
        </MainBoxContainer>
    )
}

