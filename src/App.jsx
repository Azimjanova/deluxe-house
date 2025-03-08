import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ImageComponent from './components/ImageComponent';
import RemontPage from "./pages/remont/RemontPage.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <ImageComponent />
            <RemontPage/>
        </Provider>
    );
};



export default App;