import React from 'react';
import MainBox from '../../shared/components/MainBox.jsx';
import MainBoxContainer from '../../shared/components/MainBoxContainer.jsx';
import MainTitle from '../../shared/components/MainTitle.jsx';
import CalculatorItemsList from './components/SellableItemsList.jsx';
import { CalculatorProvider } from './hooks/useSellableContext.jsx'

export default function Calc() {

    return (
        <MainBoxContainer>
            <MainBox>
                <MainTitle>CALC</MainTitle>
                <CalculatorProvider>
                    <CalculatorItemsList />
                </CalculatorProvider>
            </MainBox>
        </MainBoxContainer>
    )
}

