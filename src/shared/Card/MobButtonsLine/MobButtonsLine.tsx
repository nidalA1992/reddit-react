import React from 'react';
import styles from './mobbuttonsline.css';
import { MenuButton } from '../../MenuButton';
import { EColor, EIcon } from '../../enums';
import classNames from 'classnames/bind';
import { generateClass } from '../../../utils/react/generateClasses';
import { GenericList } from '../../GenericList';
import { generateId } from '../../../utils/react/generateKey';

interface IMobButtonsLine {
  numComments?: number;
}

export function MobButtonsLine(props: IMobButtonsLine) {

  const { numComments = 0 } = props;
  const cx = classNames.bind(styles);
  const classes = generateClass('mobButtons', ['comments', 'shared', 'save'], cx);

  const LIST = [
    { children: <MenuButton className={classes()} icon={EIcon.comment} text={numComments} color={EColor.greyC4}/> },
    { children: <MenuButton className={classes()} icon={EIcon.shared} sizes={{iS: 11}}/> },
    { children: <MenuButton className={classes()} icon={EIcon.save} sizes={{iS: 11}}/> },
  ].map(generateId);

  return (
    <div className={styles.mobButtonsLine}>
      <GenericList list={LIST}/>
    </div>
  );
}
