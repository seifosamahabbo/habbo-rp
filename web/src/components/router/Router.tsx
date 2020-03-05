import { RouteProps } from 'react-router';
import React, { ReactComponentElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

let routes: RouteProps[] = [];

let notFoundRoute: ReactComponentElement<any>|undefined;

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route: RouteProps, index: number) => (
            <Route key={index} {...route} />
          ))
        }
        {
          notFoundRoute && notFoundRoute
        }
      </Switch>
    </BrowserRouter>
  )
}

export function setURL(url: string, component: ReactComponentElement<any>): void {
  routes.push({
    path: `/${url}`,
    children: component,
  })
}

export function set404(component: ReactComponentElement<any>): void {
  notFoundRoute = component;
}