import React from 'react';
import { ColumnProps } from './';

export function Column({ children }: ColumnProps) {
  return <div className="column">{children}</div>;
}
