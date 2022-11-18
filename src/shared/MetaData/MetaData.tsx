import React from 'react';
import { EColor } from '../enums';
import styles from './metadata.css';
import { Text } from '../Text';
import { Avatar } from './Avatar';

interface IDataProps {
  avatarSrc: string, 
  userUrl: string, 
  userName: string, 
  publichedTime: string
}

interface IMetaData {
  data: IDataProps;
  subredditLabel?: string;
  hidePublished?: boolean;
  altOrder?: boolean;
}

export function MetaData(props: IMetaData) {
  const { data, subredditLabel, hidePublished, altOrder } = props;
  const {
    avatarSrc, 
    userUrl, 
    userName, 
    publichedTime
  } = data;

  return (
    <div className={styles.metaData}>
      <Avatar 
        altOrder={altOrder} 
        avatarSrc={avatarSrc} 
        userUrl={userUrl} 
        userName={userName}
      />

      <Text size={14} mobileSize={10} color={EColor.grey99}>
        {
          !hidePublished && 
            <span className={styles.published}>опубликовано</span>
        }
        { publichedTime }
      </Text>

      {
        subredditLabel && 
          <span className={styles.subredditLabel}>{subredditLabel}</span>
      }
    </div>
  );
}
