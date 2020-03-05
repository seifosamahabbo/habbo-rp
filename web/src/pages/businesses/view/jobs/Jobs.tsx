import React from 'react';
import { setURL } from 'components';

setURL('businesses/:id/jobs', <Jobs/>);

export function Jobs() {
  return (
    <p>Business Job Postings</p>
  )
}