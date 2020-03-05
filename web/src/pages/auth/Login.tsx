import React from 'react';
import { setURL } from 'components';

setURL('login', <Login/>);

export function Login() {
  return (
    <div className="text-center" style={{ backgroundImage: 'url(/img/bg/front.png)', backgroundPosition: 'no-repeat', backgroundColor: '#f6f6f6' }}>
      <div style={ { marginLeft: 10, width: 400 } }>
        <form className="form-signin" style={ { maxWidth: 380 } } action="/" method="post">
          <img className="mb-4 rounded" src="34101043_1918243188228000_599624069276499968_n.png" alt="" width="72"
               height="72"/>
          <div className="card">
            <div className="card-body">
              <p className="text-muted">
                <i className="fad fa-users"/>
                &nbsp; 6 citizens online
              </p>
              <p>Fabbo is a virtual world where you can live through realism.</p>
              <p><b>Now in Open Beta.</b></p>
              <label className="sr-only">Email address</label>
              <input type="email" className="form-control" placeholder="Email address"/>
              <label className="sr-only">Password</label>
              <input type="password" className="form-control" placeholder="Password"/>
              <div className="form-row">
                <div className="col">
                  <button className="btn btn-lg btn-info btn-block" type="button">
                    <i className="fad fa-user-plus"/>
                    &nbsp; Register
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-lg btn-success btn-block" type="submit" name="adds">
                    <i className="fad fa-sign-in"/>
                    &nbsp; Sign in
                  </button>
                </div>
              </div>
              <hr/>
              <a href="" className="btn btn-primary btn-block btn-lg">
                <i className="fab fa-facebook-square"/>
                &nbsp;Log in with
              </a>
            </div>
          </div>
          <p className="mt-2 mb-3 text-muted">Fabbo is a not for profit educational project.</p>
        </form>
      </div>
    </div>
  );
}