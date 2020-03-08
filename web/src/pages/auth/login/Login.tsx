import React from 'react';
import {
  AuthLayout,
  setURL,
  redirect,
  Input,
  Label,
  Typography,
  Row,
} from 'components';

setURL('login', <Login />);

export function Login() {
  function onLogin(): void {
    console.log('do submit');
  }

  function onRegister(): void {
    redirect('register');
  }

  return (
    <AuthLayout onRegister={onRegister} onSubmit={onLogin} onLogin={onLogin}>
      <Row>
        <Typography type="h6">Login</Typography>
      </Row>
      <Row>
        <Label>Email address</Label>
        <Input type="email" placeholder="Email address" />
      </Row>
      <Row>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </Row>
    </AuthLayout>
  );
}
