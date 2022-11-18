import React from 'react';
import styles from './postcontent.css';

interface IPostContent {
  title?: string;
}

export function PostContent(props: IPostContent) {
  return (
    <div className={styles.content}>
      <h2>{props.title}</h2>
    </div>
  );
}
