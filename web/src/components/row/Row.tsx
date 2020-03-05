import React from 'react';
import { RowProps } from './';

export function Row({ children }: RowProps) {
  return <div className="row">{children}</div>;
}
