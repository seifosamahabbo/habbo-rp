import { SessionInterface } from './';
import { localStorageService } from 'app/service';
import { exampleUser, UserSession } from 'app/interface';

class SessionService implements SessionInterface {
  readonly localStorageKey = 'session';

  async start(): Promise<void> {
    try {
      const authToken: string = localStorageService.get(this.localStorageKey);
    } catch {
      this.logout();
    }
  }

  async login(username: string, password: string): Promise<UserSession> {
    return {
      user: exampleUser,
      startedAt: new Date(),
    };
  }

  async logout(): Promise<void> {
    localStorageService.delete(this.localStorageKey);
  }
}

export const sessionService: SessionInterface = new SessionService();
