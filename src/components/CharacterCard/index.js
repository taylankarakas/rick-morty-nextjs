import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';

const Index = ({ id, image, name, status, species, gender }) => {
  return (
    <Link href='/character/[id]' as={`/character/${id}`}>
      <a title={name} className={styles.card}>
        <div className={styles.imageSection}>
          <img src={image} />
          <div className={styles.info}>
            <span>{name}</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.characterFeature}>
            <span>STATUS</span>
            <span>{status}</span>
          </div>
          <div className={styles.characterFeature}>
            <span>SPECIES</span>
            <span>{species}</span>
          </div>
          <div className={styles.characterFeature}>
            <span>GENDER</span>
            <span>{gender}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Index;