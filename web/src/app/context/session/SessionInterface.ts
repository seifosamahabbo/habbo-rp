import { UserWire } from 'interface/UserWire';

export interface SessionContextState {
  active: boolean;
  startedAt?: Date;
  user?: UserWire;
  setStore: (changes: Partial<SessionContextState>) => void;
}