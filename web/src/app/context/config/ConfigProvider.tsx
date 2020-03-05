import React, { PureComponent } from 'react';
import { ConfigContext} from './ConfigContext';
import { ConfigContextState } from './CreateInterface';

export interface ConfigContextProviderProps {
  children: any;
}

export class ConfigProvider extends PureComponent<ConfigContextProviderProps> {

  setStore = (changes: Partial<ConfigContextState>): void => {
    return this.setState(changes);
  };

  state: ConfigContextState = {
    siteName: 'HabboRP',
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return (
      <ConfigContext.Provider value={this.state}>
        { children }
      </ConfigContext.Provider>
    )
  }

}