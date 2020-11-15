import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import {Provider} from "react-redux";
import counterReducer from "./components/counterReducer"

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(render);

render();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// ACTIONS
const addAction = {
  type: 'ADD',
};

const removeAction = {
  type: 'REMOVE',
};

// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
      case 'ADD':
          return state + 1;
      case 'REMOVE':
          return state - 1;
      default:
          return state;
  }
}

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
  renderStore.innerHTML = store.getState();
}


const add = document.getElementById('add');
add.addEventListener('click', () => {
  store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
  store.dispatch(removeAction)
});