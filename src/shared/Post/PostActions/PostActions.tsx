import React from 'react';
import { ButtonList } from '../../ButtonList';
import styles from './postactions.css';

interface IPostActions {
  comments?: number;
}

export function PostActions({comments}: IPostActions) {

  return (
    <div className={styles.bar}>  
      <ButtonList commentsNum={comments || 0}/>
      <span className={styles.voted}>50% Проголосовали</span>
    </div>
  );
}
