import React from 'react';
import {Route, Routes} from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import BaseCounterPage from "./pages/BaseCounterPage";
import ReduxCounterPage from "./pages/ReduxCounterPage";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/counter" element={<BaseCounterPage/>}/>
                <Route path="/redux_counter" element={<ReduxCounterPage/>}/>
            </Routes>
        </>
    )
}

export default App;
