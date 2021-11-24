import React from 'react';
import './App.css';
import Header from './Header';
import DataDisplay from './DataDisplay';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='body-container'>
        <DataDisplay />
      </div>
      <Footer />
    </div>
  );
}

export default App;
