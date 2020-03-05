import React from 'react';
import { Card, Header, setURL, NavBar } from 'components';

setURL('home', <Home/>);

export function Home() {
  return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <Card header="Info">
                    <p>Welcome</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><i className="fad fa-info" aria-hidden="true"></i>&nbsp; Info</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Learn more about Fabbo!</h6>
                  <ul className="list-unstyled text-left">

                    <li className="media">
                      <i className="fad fa-door-open mr-3" aria-hidden="true"></i>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Introduction</h5>
                        Welcome to Fabbo, an interactive roleplaying environment where characters work and live in the
                        bustling Broadwater City and quieter town of Oakdale. Fabbo follows a realistic governance
                        structure and strives for the most realism possible.
                      </div>
                    </li>

                    <li className="media my-4">
                      <i className="fad fa-briefcase mr-3" aria-hidden="true"></i>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Working and jobs</h5>
                        Money doesn't grow on trees! As a citizen of Fabbo you have the chance to get a job and earn
                        some money. To view available jobs, visit the 'Jobs' section of the website. Working is
                        divided into shifts of 10 minutes (1 hour in-game time). Every 10 minutes you will receive
                        your payslip. There are certain restrictions on working on weekends.
                      </div>
                    </li>

                    <li className="media my-4">
                      <i className="fad fa-siren-on mr-3" aria-hidden="true"></i>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Crime and gangs</h5>
                        An inevitable feature of any environment is crime! Not to fear though, the Central Police
                        Service of Fabbo (known as Central Police) works hard to protect all citizens. The Central
                        Police is headed by a civilian Commissioner who is elected by you. Fancy a life of crime? Form
                        a gang and take over roads and stamp your territory!
                      </div>
                    </li>

                    <li className="media my-4">
                      <i className="fad fa-box-ballot mr-3" aria-hidden="true"></i>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Democracy and life</h5>
                        Fabbo is a functional democracy. Citizens are governed in two levels. The highest level is the
                        Central Government which is headed by the President. The Central Government passes laws and
                        regulations, collects federal taxes and maintains federal departments and agencies such as the
                        Police and Health Services. The second level is local government. The Broadwater District
                        Council oversees all municipal services and collects taxes and provides services. It is
                        elected every 4 weeks.
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fad fa-fire-alt"/>
                    &nbsp; Top Locations
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">See where the top locations are!</h6>

                  <table className="table table-hover">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Citizens</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">25</th>
                      <td>[Building] 2 Parker St</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>[Road] M102</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>[City] Parker Street</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>[City] James Street</td>
                      <td>1</td>
                    </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}