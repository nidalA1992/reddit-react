import React, { useContext } from 'react';
import styles from './commentactions.css';
import { MenuButton } from '../../../../MenuButton';
import { EIcon } from '../../../../enums';

interface ICommentActions {
  openAnswerForm: () => void;
}

export function CommentActions({ openAnswerForm }: ICommentActions) {
  return (
    <div className={styles.actions}>
      <MenuButton 
        className={styles.button} 
        icon={EIcon.comment} 
        text='Ответить' 
        onClick={openAnswerForm}
      />
      <MenuButton 
        className={styles.button} 
        icon={EIcon.shared} 
        text='Поделиться' 
      />
      <MenuButton 
        className={styles.button} 
        icon={EIcon.warning} 
        text='Пожаловаться' 
      />
    </div>
  );
}
