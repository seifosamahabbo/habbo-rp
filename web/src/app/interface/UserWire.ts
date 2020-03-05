export interface UserWire {
  id: number;
  username: string;
  purseBalance: number;
  bankBalance: number;
}

export const exampleUserWire: UserWire = {
  id: 1,
  username: 'Test-User',
  purseBalance: 0,
  bankBalance: 0,
};
