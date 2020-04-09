import React from 'react';
import styles from './Layout.module.css';

const Index = props => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default Index;