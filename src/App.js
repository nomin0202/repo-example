/* eslint-disable */
import React from 'react';
import './App.css';
import Header from './component/Header';
import Contents from './component/Contents';
// import Footer from './component/Footer';
// import PackingList from './component/PackingList';

function App() {
  return (
    <div className="App">
      <div className='bg-container'>
        <Header />
        <Contents />
        {/* <Footer/> 
        <PackingList/> */}
      </div>
    </div>
  );
}


export default App;
