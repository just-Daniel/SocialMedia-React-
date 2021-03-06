import store from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={ state } 
            dispatch={ store.dispatch.bind(store) }
      />
    </React.StrictMode>,
    document.getElementById('root')
  ); 
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
