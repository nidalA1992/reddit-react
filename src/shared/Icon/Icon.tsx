import React from 'react';
import { EIcon } from '../enums';
import * as Icons from '../icons';
import IIconsProps from '../icons/IIconsProps';

export function Icon(props: IIconsProps) {
  const {size = 14, name} = props;

  console.log(Icons);
  
  
  return (
    <>{Icons[name || EIcon.anon]({size})}</>
  );
}
