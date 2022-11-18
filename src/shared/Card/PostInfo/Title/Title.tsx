import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../../Text';
import styles from './title.css';

interface ITitleProps {
  title: string;
  postId: string;
}

export function Title(props: ITitleProps) {

  return (
    <span className={styles.title}>
      <Link 
        to={`/posts/${props.postId}`}
        className={styles.postLink} 
      >
      </Link>
      <Text As='h2' size={16} tabletSize={20}>
        {props.title}
      </Text>
    </span>
  );
}
