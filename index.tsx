import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/components/App/App';
import http from './src/utils/http'

http.get('./post')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
