import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from './navbar/modeSlice';

import './App.scss';

import { Navbar } from './navbar/Navbar'

function App() {
  // Erase ! in order to work correctly
  const { isDark } = useSelector((state: any) => state.mode);
  const dispatch = useDispatch();

  const changeDarkMode = () => dispatch(setMode(!isDark));

  useEffect(() => {
    dispatch(setMode(!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)))
  }, [])

  return (
    <div className={`app ${isDark ? "darkmode" : "lightmode"}`}>
      <Navbar setDarkMode={changeDarkMode}   />
    </div>
  );
}

export default App;
