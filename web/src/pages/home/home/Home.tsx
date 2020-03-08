import React from 'react';
import {
  Container,
  Row,
  Column,
  Header,
  setURL,
  NavBar,
  OpenBetaCard,
  UserLayout, BugTestingCard, InfoCard, ServerStatusCard,
} from 'components';

setURL('home', <Home/>);

export function Home() {
  return (
    <UserLayout>
      <Header/>
      <NavBar/>
      <main>
        <Container>
          <Row>
            <Column size={ 8 }>
              <BugTestingCard/>
              <InfoCard/>
            </Column>
            <Column size={4}>
              <OpenBetaCard/>
              <ServerStatusCard/>
            </Column>
          </Row>
        </Container>
      </main>
    </UserLayout>
  );
}
