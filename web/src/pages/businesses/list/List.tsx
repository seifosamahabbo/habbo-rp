import React from 'react';
import { Column, JobCentreCard, setURL, Row, UserLayout } from 'components';

setURL('businesses', <List />);

export function List() {
  return (
    <UserLayout>
      <Row>
        <Column size={8}>
          <JobCentreCard/>
        </Column>
      </Row>
    </UserLayout>
  )
}
