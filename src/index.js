import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from '@Slices/index';

const store = configureStore({
    reducer: rootReducer
})
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();