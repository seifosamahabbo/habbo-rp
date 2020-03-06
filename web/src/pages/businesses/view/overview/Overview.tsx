import React from 'react';
import { setURL } from 'components';

setURL('businesses/:id', <Overview />);

export function Overview() {
  return <p>Businesses Landing</p>;
}
