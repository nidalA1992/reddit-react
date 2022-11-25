import React from 'react';
import { EIcon } from '../enums';
import * as Icons from '../Icons';
import IIconsProps from '../Icons/IIconsProps';

export function Icon(props: IIconsProps) {
  const {size = 14, name} = props;
  
  return (
    <>{Icons[name || EIcon.anon]({size})}</>
  );
}
