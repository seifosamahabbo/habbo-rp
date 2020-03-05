import React, { PureComponent } from 'react';
import { SessionContext } from './SessionContext';
import { SessionContextState } from './SessionInterface';
import { exampleUserWire } from 'interface/UserWire';

export interface SessionContextProviderProps {
  children: any;
}

export class SessionContextProvider extends PureComponent<SessionContextProviderProps> {

  setStore = (changes: Partial<SessionContextState>): void => {
    return this.setState(changes);
  };

  getStore = (): SessionContextState => {
    return this.state;
  };

  state: SessionContextState = {
    active: false,
    startedAt: undefined,
    user: exampleUserWire,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return (
      <SessionContext.Provider value={this.state}>
        { children }
      </SessionContext.Provider>
    )
  }


}