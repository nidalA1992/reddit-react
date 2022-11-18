import React, { MouseEvent, MouseEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import styles from './dropdown.css';
import className from 'classnames/bind';
import { DropDownList } from './DropDownList';
import { getCoordinates } from '../../utils/ts/getCoordinates';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  listClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

interface IPosition {
  x: number;
  y: number;
}

const NOOP = () => {};
const cx = className.bind(styles);

export function Dropdown(props: IDropdownProps) {
  const { 
    button, 
    children, 
    isOpen, 
    onOpen = NOOP, 
    onClose = NOOP, 
    className 
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [position, setPosition] = useState<IPosition>({x: 0, y: 0});

  const classes = cx('container', {[`${className}`]: className})

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  
  const handleOpen = (e: MouseEvent) => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
    const coords = getCoordinates(e.currentTarget);
    setPosition({x: coords.left, y: coords.top});
  }
  
  return (
    <div className={classes}>
      <div onClick={(e) => handleOpen(e)}>
        {button}
      </div>
      {isDropdownOpen && 
        <DropDownList
          position={position} 
          children={children} 
          onClose={() => setIsDropdownOpen(false)}
      />}
    </div>
  );
}
