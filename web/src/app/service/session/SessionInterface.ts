import { UserSession } from 'app/interface';

export interface SessionInterface {
  start(): Promise<void>;
  login(username: string, password: string): Promise<UserSession>;
  logout(): void;
}
