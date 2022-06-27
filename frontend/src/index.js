import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from "./routes";

ReactDOM.render(
  <React.StrictMode>
        <AppRoute/>
  </React.StrictMode>,
  document.getElementById('root')
);


