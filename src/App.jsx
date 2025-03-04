import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/actions/reducers/store.js';
import ImageComponent from './components/ImageComponent';

const App = () => {
    return (
        <Provider store={store}>
            <ImageComponent />
        </Provider>
    );
};

export default App;