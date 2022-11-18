import React, { createRef, useContext, useRef, useState } from 'react';
import styles from './comment.css';
import { CommentActions } from './CommentActions'
import { KarmaCounter } from '../../../KarmaCounter';
import { MetaData } from '../../../MetaData';
import { Text } from '../../../Text';
import { ReplyFormContainer } from '../../../ReplyFormContainer';

export function Comment() {
  const [answer, setAnswer] = useState(false);

  const data = {
    publichedTime: new Date().toLocaleDateString(), 
    avatarSrc: "https://i.redd.it/snoovatar/avatars/9bdefef0-1f4f-4ea9-9a52-e97cbbdacd15.png", 
    userUrl: "asasdfa", 
    userName: 'anon'
  };

  return (
    <div className={styles.commentWrapper}>
      <div>
        <div className={styles.karmaCounter}>
          <KarmaCounter value={0}/>
        </div>
        <span className={styles.sideLine}></span>
        <div className={styles.comment}>
          <MetaData 
            altOrder 
            hidePublished 
            subredditLabel='Программирование' 
            data={{...data}}/>
          <Text size={14}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quis, recusandae pariatur amet, qui architecto repellendus eveniet maxime sit rem aspernatur corporis repellat velit vel ullam eius sint cum illum!
          </Text>
        </div>
        <CommentActions  openAnswerForm={() => setAnswer(prev => !prev)}/>
      </div>
      {
        answer&&
        <ReplyFormContainer userName={data.userName}/>
      }
      {/* <CommentsList /> */}
    </div>
  );
}
