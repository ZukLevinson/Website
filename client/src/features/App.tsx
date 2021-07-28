import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from './navbar/modeSlice';

import styles from './App.module.scss';

import { Navbar } from './navbar/Navbar';

function App() {
  // Erase ! in order to work correctly
  const { isDark } = useSelector((state: any) => state.mode);
  const dispatch = useDispatch();

  const changeDarkMode = () => dispatch(setMode(!isDark));

  useEffect(() => {
    dispatch(setMode(!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)))
  }, [])

  return (
    <div className={`${styles.app} ${isDark ? "darkmode" : "lightmode"}`}>
      <div className={styles.content}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
