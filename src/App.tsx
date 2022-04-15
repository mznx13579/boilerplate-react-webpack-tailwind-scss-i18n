import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-sky-400 text-3xl font-bold underline">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link to="/hi">goToHiPage</Link>
        <p>{t('안녕')}</p>
      </header>
    </div>
  );
}

export default App;
