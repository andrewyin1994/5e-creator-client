import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import { CharacterListProvider } from './contexts/CharacterListContext';
import { UserProvider } from './contexts/UserContext';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CharacterListProvider>
        <App />
      </CharacterListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
