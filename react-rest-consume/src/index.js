import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import LogIn from './LogIn';
import MaterialDesingExample from './MaterialDesingExample';
import MyProfile from './myprofile/MyProfile';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<MyProfile />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
