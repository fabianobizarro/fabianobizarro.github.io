import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import './style/style.css';
import 'animate.css';
import 'bulma/css/bulma.css';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

import { Provider } from 'react-redux';
import store, { saveState } from './store';
import { changeLanguage } from './actions';

import { getLanguage } from './utils';

store.subscribe(() => {
  saveState(store.getState());
});

const lang = getLanguage();
store.dispatch(changeLanguage(lang));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
