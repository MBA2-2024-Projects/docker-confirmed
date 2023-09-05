import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMessage(response.data.message);
        setValue(response.data.value);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données du serveur : ', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="message">Message from the server : <b>{message}</b> <br></br><i style={{fontSize:"20px"}}>from <b>{API_URL}</b></i></div>
        <div className="message">Number of database connections : <b>{value}</b></div>
      </header>
    </div>
  );
}

export default App;
