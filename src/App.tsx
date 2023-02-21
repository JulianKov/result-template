import React from 'react';
import styles from './App.module.css'
import {Content} from "./components";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Content />
      </div>
    </div>
  );
}

export default App;
