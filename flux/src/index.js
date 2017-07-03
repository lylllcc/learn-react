import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ControlPanel from './view/ControlPanel'
ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
