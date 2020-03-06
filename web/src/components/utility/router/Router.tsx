import React, { ReactNode } from 'react';
import { RouteProps } from 'react-router';
import { createBrowserHistory, History } from 'history';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

const routerHistory: History = createBrowserHistory();

const routes: RouteProps[] = [];

let notFoundRoute: ReactNode | undefined;

export function Router() {
  return (
    <BrowserRouter history={routerHistory}>
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

export function redirect(path: string): void {
  routerHistory.push(`/${path}`);
}
