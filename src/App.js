import logo from './logo.svg';
import './App.css';
import Header from './componenets/Header';
import SideBar from './componenets/SideBar';
import MainContainer from './componenets/MainContainer';
import { useState } from 'react';

function App() {
  const[sideBar, setSideBar]= useState(false);
  return (
    <div className="w-full">
      <Header sideBar={sideBar} setSideBar={setSideBar}/>
      <div className=' flex w-full '>
        <SideBar sideBar={sideBar}/>
        <MainContainer/>
      </div>
    </div>
  );
}

export default App;
