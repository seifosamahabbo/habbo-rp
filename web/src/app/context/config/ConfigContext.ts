import { createContext } from 'react';
import { ConfigContextState } from './CreateInterface';

export const ConfigContext = createContext<ConfigContextState>({
  siteName: 'HabboRP',
  setStore: () => { },
});