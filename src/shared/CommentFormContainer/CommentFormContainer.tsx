import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { commentTextSelector, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';

export function CommentFormContainer() {
  const commentText = commentTextSelector();
  const dispatch = useDispatch();

  function onChange (e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  } 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Комментарий отправлен!');
  };

  return (
    <CommentForm 
      value={commentText}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
}

