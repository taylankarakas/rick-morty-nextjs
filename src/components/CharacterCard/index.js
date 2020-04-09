import React from 'react';
import styles from './Card.module.css';

const Index = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <img src={image} />
      <span>{name}</span>
    </div>
  );
};

export default Index;