import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ControlPanel from './ControlPanel'
ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
