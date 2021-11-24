import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [data, setData] = useState<String>();
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/data/all');
      console.log('I have gotten my data', response);
      const displayData = JSON.stringify(response.data.data)
      setData(displayData);
    }
    getData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <body>
        {data && (
          <div className='body-container'> This is my data: {data} </div>
        )}
      </body>
      <Footer />
    </div>
  );
}

export default App;
