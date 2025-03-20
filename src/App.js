/* eslint-disable */
import React from 'react';
import './App.css';
import Header from './component/Header';
import Contents from './component/Contents';
// import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <div className='bg-container'>
        <Header />
        <Contents />
        {/* <Footer/> */} 
      </div>
    </div>
  );
}


export default App;
