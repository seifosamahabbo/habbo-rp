import React from 'react';
import { CardProps } from './';

export function Card(props: CardProps) {
  const { bg, color, className, children, header } = props;
  return (
    <div
      className={`card ${bg && `bg-${bg} ${className && className}`} ${color &&
        `text-${color}`} ${className}`}
    >
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
