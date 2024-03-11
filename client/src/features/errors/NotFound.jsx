import React from 'react';
import MainBox from '../../shared/components/MainBox'; // Importez votre composant principal
import MainBoxContainer from '../../shared/components/MainBoxContainer';
import MainTitle from '../../shared/components/MainTitle';
import { Link } from 'react-router-dom';

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

