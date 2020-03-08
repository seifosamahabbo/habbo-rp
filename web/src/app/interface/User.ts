export interface User {
  id: number;
  username: string;
  purseBalance: number;
  bankBalance: number;
}

export const exampleUser: User = {
  id: 1,
  username: 'Test-UserLayout',
  purseBalance: 0,
  bankBalance: 0,
};


export const exampleBearerToken = 'Bearer 123';