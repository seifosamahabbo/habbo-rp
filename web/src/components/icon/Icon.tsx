import React from 'react';
import { IconProps } from './';

export function Icon({ className= 'mr-2', type }: IconProps) {
  return <i className={`fad fa-${type} ${className}`}/>
}