import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loader from 'Loader';
import HomePage from './pages/Home';
import reportWebVitals from './reportWebVitals';

import 'translation/i18n';
import './styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
      <Loader>
        <HomePage />
      </Loader>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
