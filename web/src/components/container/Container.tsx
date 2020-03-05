import React  from 'react';
import { ContainerProps } from './';

export function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      { children }
    </div>
  )
}