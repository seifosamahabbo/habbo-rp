import { UserWire } from 'app/interface/UserWire';

export interface SessionInterface {
  active: boolean;
  startedAt?: Date;
  user?: UserWire;
  setStore: (changes: Partial<SessionContextState>) => void;
}
