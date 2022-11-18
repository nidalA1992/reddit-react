import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useInputFocus } from '../../hooks/useInputFocus';
import { CommentForm } from '../CommentForm/CommentForm';

interface IReplyFormContainer {
  userName: string;
}

export function ReplyFormContainer({ userName }:IReplyFormContainer ) {
  const [value, setValue] = useState('');

  const ref = useRef<HTMLTextAreaElement>(null);
  
  useInputFocus(ref, userName, value);

  function onChange (e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  } 

  const handleSubmit = (e: FormEvent) => e.preventDefault();
  
  return (
    <CommentForm 
      refObj={ref}
      value={value}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
}
