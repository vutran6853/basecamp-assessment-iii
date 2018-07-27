import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Computer from './Computer';
import ShoppingList from './shoppingList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Computer />, document.getElementById('computer'));
registerServiceWorker();

ReactDOM.render(<ShoppingList />, document.getElementById('shoppingList'));
registerServiceWorker();