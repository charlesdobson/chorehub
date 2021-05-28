import { createElement, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { BottomNav, TopNav } from 'components';
import { useBreakpoints } from 'hooks';

const Views = (): ReactElement => {
  const { isDesktop } = useBreakpoints();

  return (
    <>
      <TopNav />
      <Switch>
        {Object.entries(ROUTES).map(([, value]) => (
          <Route exact path={value.path} key={value.path}>
            {createElement(value.component)}
          </Route>
        ))}
      </Switch>
      {!isDesktop && <BottomNav />}
    </>
  );
};

export default Views;
