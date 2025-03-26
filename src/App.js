/* eslint-disable */
import React from 'react';
import './App.css';
import Header from './component/Header';
import Contents from './component/Contents';
import PackingList from './component/PackingList';
import Test from './component/PackingList';


function App() {
  return (
    <div className="App">
      <div className='bg-container'>
        <Header />
        <Contents />
        {/* <PackingList/> */}
        <Test />
      </div>
    </div>
  );
}


export default App;
