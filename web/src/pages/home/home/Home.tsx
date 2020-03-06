import React from 'react';
import {
  Container,
  Card,
  Row,
  Column,
  Header,
  setURL,
  NavBar,
} from 'components';

setURL('home', <Home />);

export function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Container>
          <Row>
            <Column size={8}>
              <Card header="Info">
                <p>Welcome</p>
              </Card>
            </Column>
          </Row>
        </Container>
      </main>
    </>
  );
}
