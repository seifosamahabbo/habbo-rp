export interface User {
  id: number;
  username: string;
  purseBalance: number;
  bankBalance: number;
}

export const exampleUser: User = {
  id: 1,
  username: 'Test-User',
  purseBalance: 0,
  bankBalance: 0,
};
