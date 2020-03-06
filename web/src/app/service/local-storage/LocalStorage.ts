import { LocalStorageInterface } from './';

class LocalStorageService implements LocalStorageInterface {
  // Fetches value from localStorage
  // Throws exception upon undefined
  get(index: string): string {
    const value: string | null = localStorage.getItem(index);

    if (value === null) {
      throw new Error('Item not found');
    }

    return value;
  }

  // Sets a index with its value in localStorage
  set(index: string, value: string): void {
    localStorage.setItem(index, value);
  }

  // Removes a value from localStorage by its index if it exists
  delete(index: string): void {
    localStorage.removeItem(index);
  }
}

export const localStorageService: LocalStorageInterface = new LocalStorageService();
