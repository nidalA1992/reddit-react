import React from 'react';
import classNames from 'classnames';
import styles from './text.css';
import { EColor } from '../enums';

export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Text(props: ITextProps) {
  const { 
    As = 'span', 
    children, 
    size, 
    mobileSize, 
    tabletSize, 
    desktopSize = props,
    color = EColor.black
  } = props;
  
  const classes = classNames(
    styles[`s${size}`], 
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
    styles.common
  )

  return (
    <As className={classes}>
      {children}
    </As>
  )
} 

