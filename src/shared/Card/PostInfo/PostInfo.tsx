import React from 'react';
import styles from './postinfo.css';
import { MetaData } from '../../MetaData';
import { Title } from './Title';

export interface IPostInfoProps {
  avatarSrc: string;
  userName: string;
  userUrl: string;
  publichedTime: string;
  title: string;
  postId: string;
}

export function PostInfo(props: IPostInfoProps) {
  const {
    avatarSrc, 
    userName, 
    userUrl, 
    publichedTime, 
    title, 
    postId
  } = props;

  return (
    <div className={styles.postinfo}>
      <MetaData data={{avatarSrc, userUrl, userName, publichedTime}}/>
      <Title title={title} postId={postId}/>
    </div>
  );
}
