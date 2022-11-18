import React, { useCallback, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from '../Card/Card';
import { useDispatch } from 'react-redux';
import { postsDataSelector, tokenSelector } from '../../store/reducer';
import { postsRequestAsync } from '../../store/reexports';
import { useObserver } from '../../hooks/useObserver';

export function CardsList() {
  const { data, loading, error } = postsDataSelector();
  const dispatch = useDispatch();
  const token = tokenSelector();
  const [counter, setCounter] = useState(0);
  
  const fn = useCallback(() => {
    dispatch(postsRequestAsync());
    setCounter(prev => prev + 1);
  }, []);
  
  const [ref] = useObserver(fn, [token, !loading]);

  return (
    <ul className={styles.cardslist}>
      {!data.length && !loading &&
        <div style={{textAlign: 'center', padding: '20px 0px'}}>Постов нет!</div>
      }

      { data.map((props, index) => <Card  {...props} key={props.id + index}/>) }

      <div ref={ref} hidden={counter >= 2}></div>

      {counter >= 2 && !loading && 
        <button 
          className={styles.loadButton} 
          onClick={() => setCounter(0)}>
            Загрузить ещё...
        </button> 
      }

      {loading && 
        <div style={{textAlign: 'center', padding: '20px 0px'}}>Загрузка...</div>
      }
      
      {error && 
        <div role='alert' style={{textAlign: 'center'}}>{error}</div>
      }
    </ul>
  );
}
