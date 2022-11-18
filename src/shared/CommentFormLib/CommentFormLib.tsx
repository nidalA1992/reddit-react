import React, { ChangeEvent } from 'react';
import { CommentControl } from './CommentControl';
import { useForm, SubmitHandler } from 'react-hook-form'; 
import styles from './commentformlib.css';
import { useDispatch } from 'react-redux';
import { updateComment, commentTextSelector } from '../../store/reducer';

type Inputs = {
  commentText: string
}

export function CommentFormLib() {
  const commentText = commentTextSelector();
  const dispatch = useDispatch();

  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    alert('Форма отправлена');
  };

  const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(e.target.value));
  }

  const isInvalid = () => Boolean(errors.commentText) ? 'true' : undefined;

  return (
    <form 
      className={styles.form} 
      onSubmit={handleSubmit(onSubmit)
    }> 
      <textarea 
          {...register('commentText', {
            required: {
              value: true,
              message: 'Введите кооментарий'
            },
            minLength: {
              value: 3,
              message: 'Введите больше 3-х символов'
            },
            
          })}
          className={styles.input} 
          placeholder='Введите текс комментария' 
          onChange={onCommentChange}
          value={commentText}
          aria-invalid={isInvalid()}
        />
        {
          errors.commentText?.message && 
            <div className={styles.error}>
              {errors.commentText?.message}
            </div>
        }
      <CommentControl />
    </form>
  );
}
