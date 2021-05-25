import { createElement, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { BottomNav } from 'components';

const Views = (): ReactElement => {
  return (
    <>
      <Switch>
        {Object.entries(ROUTES).map(([, value]) => (
          <Route exact path={value.path} key={value.path}>
            {createElement(value.component)}
          </Route>
        ))}
      </Switch>
      <BottomNav />
    </>
  );
};

export default Views;
