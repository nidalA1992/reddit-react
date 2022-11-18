import React from 'react';
import styles from './avatar.css';
import { Text } from '../../Text';
import { EColor, EIcon } from '../../enums';
import classNames from 'classnames/bind';
import { Icon } from '../../Icon';

interface IAvatarProps {
  avatarSrc: string;
  userUrl: string;
  userName: string;
  altOrder?: boolean;
}

export function Avatar(props: IAvatarProps) {
  const { avatarSrc, userUrl, userName, altOrder } = props;

  const cx = classNames.bind(styles);
  const classes = cx('avatarWrapper', {altOrder: altOrder});

  const avatarIcon = avatarSrc 
    ? <img src={avatarSrc} className={styles.avatar} alt="avatar" />
    : <Icon name={EIcon.anon} size={20}/>;

  return (
    <span className={classes}>
      {avatarIcon} 
      <a className={styles.nameLink} href={userUrl}>
        <Text As='p' size={14} mobileSize={10} color={EColor.orange}>
          {userName}
        </Text>
      </a>
    </span>
  );
}
