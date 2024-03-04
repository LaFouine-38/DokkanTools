import Calc from './features/calculator/calc';
import Home from './home';
import NotFound from './features/NotFound'
import React from 'react';
import { RouterProvider, createBrowserRouter, Route, BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calc" element={<Calc />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};