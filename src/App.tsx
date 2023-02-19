import React from 'react';
import {Route, Routes} from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ReduxCounterPage from "./pages/ReduxCounterPage";
import CreateStore from "./components/CreateStore";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/counter" element={<ReduxCounterPage/>}/>
                <Route path="/redux_counter" element={<CreateStore/>}/>
            </Routes>
        </>
    )
}

export default App;
