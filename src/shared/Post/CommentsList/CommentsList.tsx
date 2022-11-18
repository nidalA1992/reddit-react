import React from 'react';
import { Comment } from './Comment'
import styles from './commentslist.css';

export function CommentsList() {
  return (
    <ul>
      <li>
        <Comment />
      </li>
    </ul>
  );
}
