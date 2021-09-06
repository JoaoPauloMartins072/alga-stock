import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/components/App/App';
import http from './src/utils/http'
import { Provider } from 'react-redux'
import store from './redux'


http.get('./post')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
