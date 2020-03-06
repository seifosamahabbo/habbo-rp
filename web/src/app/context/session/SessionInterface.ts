import { UserSession } from 'app/interface';

export interface SessionInterface extends UserSession {
  setStore: (changes: Partial<SessionInterface>) => void;
}
