import React from 'react';
import './App.css';
import PropertyForm from './PropertyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OLX Property Filter</h1>
      </header>
      <main className="App-main">
        <PropertyForm />
      </main>
    </div>
  );
}

export default App;