import React, { useContext } from 'react';
import styles from './searchBlock.css';
import { UserBlock } from '../../UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  const {name, iconImg, loading} = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock 
        userName={name} 
        avatarSrc={iconImg}
        loading={loading}
      /> 
    </div>
  );
}
