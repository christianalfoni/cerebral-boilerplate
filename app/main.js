import './main.css';

import React from 'react';
import App from './App.js';
import controller from './controller.js';
import {Container} from 'cerebral-react';

import inputValueChanged from './signals/inputValueChanged.js';
import inputValueSubmitted from './signals/inputValueSubmitted.js';

controller.signal('inputValueChanged', ...inputValueChanged);
controller.signal('inputValueSubmitted', ...inputValueSubmitted);

React.render(<Container controller={controller} app={App}/>, document.querySelector('#app'));
