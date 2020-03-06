import { createContext } from 'react';
import { SessionInterface } from './';

export const SessionContext = createContext<SessionInterface>({
  setStore: () => {},
});
