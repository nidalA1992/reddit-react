import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useCloseModalOnClickOutside } from '../../../hooks/useCloseModalOnClickOutside';
import styles from './dropdownlist.css';

interface IDropDownList {
  onClose: () => void;
  children: React.ReactNode;
  position: {x: number, y: number};
}

export function DropDownList(props: IDropDownList) {
  const {position, onClose, children} = props;
  const ref = useRef<HTMLDivElement>(null);

  useCloseModalOnClickOutside(ref, props.onClose);

  const node = document.getElementById('modal_root');
  
  if(!node) return null;

  return ReactDOM.createPortal((
    <div 
      style={{top: position.y+35, left: position.x+25}} 
      className={styles.listContainer} 
      ref={ref}
    >
      <div className={styles.list} onClick={onClose}>
        {children}
      </div>
    </div>
  ), node);
}
