import './Auth.scss';
import { AuthProps } from './';
import { Logo, Icon } from 'components';
import React, { useContext } from 'react';
import {
  ConfigContext,
  ConfigInterface,
  HealthContext,
  HealthInterface,
} from 'app/context';

export function Auth({ children, onLogin, onRegister, onSubmit }: AuthProps) {
  const configContext: ConfigInterface = useContext(ConfigContext);
  const healthContext: HealthInterface = useContext(HealthContext);

  return (
    <div className="landing-page">
      <div style={{ marginLeft: '10%', width: 400 }}>
        <form className="form-signin" onSubmit={onSubmit}>
          <Logo className="mb-4" />
          <div className="card">
            <div className="card-body">
              <p className="text-muted">
                <Icon type="users" />
                {healthContext.onlineUsers} citizens online
              </p>
              <p>
                {configContext.siteName} is a virtual world where you can live
                through realism.
              </p>
              {children}
              <div className="form-row">
                <div className="col">
                  <button
                    className="btn btn-lg btn-info btn-block"
                    type="button"
                    onClick={onRegister}
                  >
                    <Icon type="user-plus" />
                    Register
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-lg btn-success btn-block"
                    type="button"
                    onClick={onLogin}
                  >
                    <Icon type="sign-in" />
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className="mt-2 mb-3 text-muted">
          {configContext.siteName} is a not for profit educational project.
        </p>
      </div>
    </div>
  );
}
