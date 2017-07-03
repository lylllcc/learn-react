import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import './index.css';
import store from './Store.js';
import ControlPanel from './view/ControlPanel'
ReactDOM.render(
    <Provider store={store}>
        <ControlPanel/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
