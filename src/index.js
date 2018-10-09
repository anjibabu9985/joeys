import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Css/tabs.css';
import './Css/tabstyles.css';
import Signup from  './Signup';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Signup/>, document.getElementById('root'));

serviceWorker.unregister();
