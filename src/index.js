import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './style/style.css';
import 'animate.css';
import 'bulma/css/bulma.css';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

import { Provider } from 'react-redux';
import store, { saveState } from './store';
import { changeLanguage } from './actions';

const containerElement = document.getElementById('root');
const lang = containerElement.getAttribute('lang');

store.subscribe(() => {
  saveState(store.getState());
});

store.dispatch(changeLanguage(lang));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
