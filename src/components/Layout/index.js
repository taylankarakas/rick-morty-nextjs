import React from 'react';
import styles from './Layout.module.css';

const Index = props => {
  return (
    <div className={styles.container}>
      <h2>RICK & MORTY CHARACTERS</h2>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Index;