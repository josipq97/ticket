import React from 'react';
import './App.css';

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";
import Queues from "../Queues/Queues";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <SideBar />
        <Queues />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;


// Zavrsi ticket item
// kreiraj novi footer