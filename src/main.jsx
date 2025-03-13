import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/actions/reducers/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
