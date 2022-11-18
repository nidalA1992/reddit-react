import React, { ChangeEvent, FormEvent } from 'react';
import { CommentControl } from './CommentControl';
import styles from './commentform.css';

interface ICommentForm {
  value: string;
  userName?: string;
  refObj?: React.RefObject<HTMLTextAreaElement>;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

export function CommentForm(props: ICommentForm) {
  const { handleSubmit, value, refObj, onChange} = props;

  return (
    <form className={styles.form} onSubmit={handleSubmit}> 
      <textarea
        ref={refObj}         
        className={styles.input} 
        value={value} 
        onChange={onChange}
      />
      <CommentControl />
    </form>
  );
}
