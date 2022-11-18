import React from 'react';
import { generateKey } from '../../../utils/react/generateKey';
import { EIcon } from '../../enums';
import { Icon } from '../../Icon';
import styles from './commentcontrol.css';

export function CommentControl() {
  const icons = [
    EIcon.brackets,
    EIcon.image,
    EIcon.doc,
    EIcon.refresh,
    EIcon.insert,
    EIcon.addVoice,
    EIcon.messanges,
    EIcon.textArrow,
    EIcon.pdf,
  ]

  return (
    <div className={styles.control}>
      <ul className={styles.list}>
        {
          icons.map((icon) => 
            <li key={generateKey()}>
              <button>
                <Icon name={icon} size={20}/>
              </button>
            </li>
          )
        }
      </ul>
      <button className={styles.button}>Комментировать</button>
    </div>
  );
}

