import {User, UserSession} from 'app/interface';

export interface SessionInterface {

  // Fetches user bearer token if it exists
  // Attempts to fetch user with the bearer token
  // Upon failure will logout and return undefined
  init(): Promise<User|undefined>;

  // Returns a bearer token upon success
  // Throws exception upon failure
  attemptCredentials(username: string, password: string): Promise<string>;

  // Returns an user upon success
  // Throws exception upon failure
  attemptBearerToken(authToken: string): Promise<User>;

  // Removes the user's bearer token from localStorage
  logout(): void;

}