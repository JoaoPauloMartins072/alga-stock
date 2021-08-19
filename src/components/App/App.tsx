import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';

function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>

      <Table />
          
      
      </Container>
    </div>
  );
}

export default App;