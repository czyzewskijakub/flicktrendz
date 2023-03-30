import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './components/Header/Header.jsx'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Button>ELO</Button>
    </div>
  );
};

export default App;
