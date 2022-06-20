import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducers from './redux/reducers/index';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import './index.css'

const store = createStore(reducers, applyMiddleware(reduxThunk))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={ store } >
        <App />
    </Provider>
)