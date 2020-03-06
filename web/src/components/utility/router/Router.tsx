import { RouteProps } from 'react-router';
import React, { ReactNode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routes: RouteProps[] = [];

let notFoundRoute: ReactNode | undefined;

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route key={index} {...route} />
        ))}
        {notFoundRoute && notFoundRoute}
      </Switch>
    </BrowserRouter>
  );
}

export function setURL(url: string, component: ReactNode): void {
  routes.push({
    path: `/${url}`,
    children: component,
  });
}

export function set404(component: ReactNode): void {
  notFoundRoute = component;
}
