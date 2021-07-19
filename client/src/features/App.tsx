import React from 'react';
import { useState } from 'react';
import './App.css';
import { Navbar } from './navbar/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const changeDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? "darkmode" : "lightmode"}`}>
      <Navbar setDarkMode={changeDarkMode}   />
    </div>
  );
}

export default App;
