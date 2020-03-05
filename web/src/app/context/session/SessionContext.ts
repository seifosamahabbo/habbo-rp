import { createContext } from 'react';
import { SessionInterface } from './';

export const SessionContext = createContext<SessionInterface>({
  active: false,
  startedAt: undefined,
  user: undefined,
  setStore: () => {},
});
