import React from 'react';
import MainBox from '../../shared/components/MainBox.jsx';
import MainBoxContainer from '../../shared/components/MainBoxContainer.jsx';
import MainTitle from '../../shared/components/MainTitle.jsx';
import IconThumb from '../../shared/components/IconThumb.tsx';
import CalculatorItemsList from './components/SellableItemsList.jsx';
import { CalculatorProvider } from './hooks/useSellableContext.jsx'


// const typeResolver = {
//     '0': 'AGI',
//     '1': 'TEC',
//     '2': 'INT',
//     '3': 'PUI',
//     '4': 'END'
// }

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

