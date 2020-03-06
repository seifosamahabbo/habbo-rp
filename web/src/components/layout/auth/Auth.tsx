import React from 'react';
import { AuthProps } from './';

export function Auth({ children }: AuthProps) {
  return (
    <div>
      { children }
    </div>
  )
}