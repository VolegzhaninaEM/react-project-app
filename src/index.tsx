import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModalState} from "./context/ModelContext";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk'
import {RootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux';

const store: Store = createStore(RootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ModalState>
            <Provider store={store}>
                <App/>
            </Provider>
        </ModalState>
    </BrowserRouter>
);
