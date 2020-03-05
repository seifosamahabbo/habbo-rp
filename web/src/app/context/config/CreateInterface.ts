export interface ConfigContextState {
  siteName: string;
  setStore: (changes: Partial<ConfigContextState>) => void;
}