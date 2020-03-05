import './Login.scss';
import React, { useContext } from 'react';
import { setURL, Icon, Logo } from 'components';
import { ConfigContext, ConfigInterface, HealthContext, HealthInterface } from 'app/context';

setURL('login', <Login />);

export function Login() {
  const configContext: ConfigInterface = useContext(ConfigContext);
  const healthContext: HealthInterface = useContext(HealthContext);

  return (
    <div className="landing-page">
      <div style={{ marginLeft: '10%', width: 400 }}>
        <form className="form-signin">
          <Logo className="mb-4"/>
          <div className="card">
            <div className="card-body">
              <p className="text-muted">
                <Icon type="users" />
                { healthContext.onlineUsers } citizens online
              </p>
              <p>
                { configContext.siteName } is a virtual world where you can live through realism.
              </p>
              <p>
                <b>Now in Open Beta.</b>
              </p>
              <label className="sr-only">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <label className="sr-only">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="form-row">
                <div className="col">
                  <button
                    className="btn btn-lg btn-info btn-block"
                    type="button"
                  >
                    <Icon type="user-plus" />
                    Register
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-lg btn-success btn-block"
                    type="submit"
                    name="adds"
                  >
                    <Icon type="sign-in" />
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-2 mb-3 text-muted">
            { configContext.siteName } is a not for profit educational project.
          </p>
        </form>
      </div>
    </div>
  );
}
