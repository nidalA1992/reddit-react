import React from 'react';
import styles from './karmacounter.css';
import { Icon } from '../Icon';
import { EIcon } from '../enums';

interface IKarmaCounter {
  value?: number;
}

export function KarmaCounter(props: IKarmaCounter) {
  return (
    <span className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon name={EIcon.arrow}/>
      </button>
        <span className={styles.value}>{props.value || ''}</span>
      <button className={styles.down}>
        <Icon name={EIcon.arrow}/>
      </button>
    </span>
  );
}
