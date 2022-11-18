import React, { useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { useCloseModalOnClickOutside } from '../../hooks/useCloseModalOnClickOutside';
import { CommentsList } from './CommentsList';
import { PostActions } from './PostActions';
import { SortControl } from './SortControl';
import { CommentFormLib } from '../CommentFormLib';
import { useHistory, useParams } from 'react-router-dom';
import { postsDataSelector } from '../../store/reducer';
import { PostContent } from './PostContent';

type paramsType = {
  id: string;
}

export function Post() {  
  const ref = useRef<HTMLDivElement>(null);
  const node = document.getElementById('modal_root');
  const history = useHistory();
  const {id} = useParams<paramsType>();
  const post = postsDataSelector().data.find(post => post.id === id);

  useCloseModalOnClickOutside(ref, (() => history.push('/posts')));

  if(!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <PostContent title={post?.title} />
      <PostActions comments={post?.numComments}/>
      <CommentFormLib />
      <SortControl />
      <CommentsList /> 
    </div>
  ), node);
}
