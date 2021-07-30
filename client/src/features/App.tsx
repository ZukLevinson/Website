import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from './navbar/modeSlice';

import styles from './App.module.scss';

import { Navbar } from './navbar/Navbar';
import { setGithubData } from './github/githubSlice';

function App() {
  // Erase ! in order to work correctly
  const { isDark } = useSelector((state: any) => state.mode);
  const { bio } = useSelector((state: any) => state.github);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode(!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)));
    
    fetch(`https://api.github.com/users/${process.env.REACT_APP_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        console.log(data, process.env);
        dispatch(setGithubData(data));
      });
  }, [])

  return (
    <div className={`${styles.app} ${isDark ? "darkmode" : "lightmode"}`}>
      <div className={styles.content}>
        <div className={styles["sub-content"]}>
          <div className={styles.header}>
            <span>Hello, <br/> I'm Zuk</span>
          </div>

          <div className={styles.description}>
            <p>{bio}</p>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
