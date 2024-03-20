import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ThemeProvider from '@mui/styles/ThemeProvider'
import theme from './theme/theme';
const Home = lazy(() => import(/* webpackChunkName: "home" */ './features/home/Home.jsx'));
const Calc = lazy(() => import(/* webpackChunkName: "calc" */ './features/calculator/SellableItemsCalculatorPage'));
const Test = lazy(() => import(/* webpackChunkName: "test" */ './features/test/Test'));
const NotFound = lazy(() => import(/* webpackChunkName: "notfound" */ './features/errors/NotFound'));



export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calc" element={<Calc />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>

        </ThemeProvider >
    );
};