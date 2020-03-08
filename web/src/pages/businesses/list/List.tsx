import React from 'react';
import { setURL, UserLayout } from 'components';

setURL('businesses', <List />);

export function List() {
  return (
    <UserLayout>
      <p>Business List</p>
    </UserLayout>
  )
}
