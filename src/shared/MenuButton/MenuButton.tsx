import React from 'react';
import styles from './menubutton.css';
import { Icon } from '../Icon';
import { Text, TSizes } from '../Text';
import { EIcon, EColor } from '../enums';

type TMenuButtonSizes = {
  iS: number,  
  fS: TSizes, 
  mFs: TSizes, 
  tFs: TSizes, 
  dFs: TSizes
}

interface IMenuButtonProps {
  icon: EIcon;
  text: string | number;
  color: EColor;
  className: string;
  sizes: Partial<TMenuButtonSizes>;
  onClick: () => void;
}

export function MenuButton(props: Partial<IMenuButtonProps>) {
  const {
    text, 
    color = EColor.grey99,
    icon, 
    className,
    sizes,
    onClick
  } = props;

  const { 
    iS = 14, 
    fS = 14, 
    mFs = 12, 
    tFs = 14, 
    dFs = 14,
  } = sizes || {};

  return (
    <button className={className} onClick={onClick}>
      {icon && <Icon name={icon} size={iS}/>}
      <Text 
        size={fS} 
        mobileSize={mFs} 
        color={color} 
        desktopSize={dFs} 
        tabletSize={tFs}
      >
        {text}
      </Text>
    </button>
  );
}
