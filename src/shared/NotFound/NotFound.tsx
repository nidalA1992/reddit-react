import styles from './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className={styles.container}>
      <p className={styles.text}>404 - страница не найдена!</p>
      <Link className={styles.back} to='/'>ᐊ На главную</Link>
    </div>
  );
}
 
export default NotFound;
