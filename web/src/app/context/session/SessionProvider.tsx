import React, { PureComponent } from 'react';
import { exampleUserWire } from 'app/interface/UserWire';
import { SessionContext, SessionInterface, SessionProviderProps } from './';

export class SessionContextProvider extends PureComponent<
  SessionProviderProps
> {
  setStore = (changes: Partial<SessionInterface>): void => {
    return this.setState(changes);
  };

  state: SessionInterface = {
    active: false,
    startedAt: undefined,
    user: exampleUserWire,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return (
      <SessionContext.Provider value={this.state}>
        {children}
      </SessionContext.Provider>
    );
  }
}
