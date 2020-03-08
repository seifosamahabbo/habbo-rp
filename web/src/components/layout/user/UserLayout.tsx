import { UserLayoutProps } from './';
import React, { useContext } from 'react';
import { redirect } from '../../utility/router';
import { SessionContext, SessionInterface } from 'app/context';

export function UserLayout({ children }: UserLayoutProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return children;
}