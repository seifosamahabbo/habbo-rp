import React from 'react';
import { ColumnProps } from './';

export function Column({ children, size }: ColumnProps) {
  return (
    <div className={`col col-md-${size}`}>
      {children}
    </div>
  );
}
