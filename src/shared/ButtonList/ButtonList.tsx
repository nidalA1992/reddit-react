import React from 'react';
import { EIcon } from '../enums';
import { MenuButton } from '../MenuButton';
import styles from './buttonlist.css';
import classNames from 'classnames/bind';
import { generateClass } from '../../utils/react/generateClasses';
import { generateKey } from '../../utils/react/generateKey';

const cx = classNames.bind(styles);

interface IMenuListItemsProps {
  postId?: string;
  commentsNum?: number;
}

type ButtonData = [string, EIcon];

export function ButtonList(props: IMenuListItemsProps) {
  const { postId, commentsNum } = props;
  const classes = generateClass( 
    'menuItem', 
    ['comments', 'shared', 'block', 'save', 'warning'], 
    cx
  );
  const commentsLabel = commentsNum 
    ? commentsNum + ' комментария' 
    : 'Комментарии'
  const data:ButtonData[] = [
    [commentsLabel, EIcon.comment],
    ['Поделиться', EIcon.shared],
    ['Скрыть', EIcon.block],
    ['Сохранить', EIcon.save],
    ['Пожаловаться', EIcon.warning]
  ];

  return (
    <ul className={styles.menuItemsList}>
      {data.map((item, i) => 
        <li key={generateKey()}>
          <MenuButton 
          text={data[i][0]}
          icon={data[i][1]}
          className={classes()}
        />
        </li>
      )}
    </ul>
  );
}
