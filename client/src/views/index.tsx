import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTE } from 'constants/routes';
import HomeView from './HomeView';
import CalendarView from './CalendarView';
import TasksView from './TasksView';
import RewardsView from './RewardsView';
import WellnessView from './WellnessView';

const Views = (): ReactElement => {
  return (
    <Switch>
      <Route exact path={ROUTE.HOME}>
        <HomeView />
      </Route>
      <Route path={ROUTE.CALENDAR}>
        <CalendarView />
      </Route>
      <Route path={ROUTE.TASKS}>
        <TasksView />
      </Route>
      <Route path={ROUTE.REWARDS}>
        <RewardsView />
      </Route>
      <Route path={ROUTE.WELLNESS}>
        <WellnessView />
      </Route>
    </Switch>
  );
};

export default Views;
