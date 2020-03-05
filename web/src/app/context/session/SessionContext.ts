import { createContext } from 'react';
import { SessionContextState } from './SessionInterface';

export const SessionContext = createContext<SessionContextState>({
  active: false,
  startedAt: undefined,
  user: undefined,
  setStore: () => { },
});
