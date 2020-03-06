import React, { PureComponent } from 'react';
import { exampleUser } from 'app/interface';
import { SessionContext, SessionInterface, SessionProviderProps } from './';

export class SessionContextProvider extends PureComponent<
  SessionProviderProps
> {
  setStore = (changes: Partial<SessionInterface>): void => {
    return this.setState(changes);
  };

  state: SessionInterface = {
    startedAt: undefined,
    user: exampleUser,
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
