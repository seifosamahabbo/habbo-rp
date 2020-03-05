import React from 'react';
import { ButtonProps } from './';

export function Button({ color = 'light', className, children, onClick }: ButtonProps) {
  return (
    <button className={`btn btn-${color} ${className} `} onClick={onClick}>
      { children }
    </button>
  )
}