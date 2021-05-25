import { ReactElement } from 'react';
import { FaHome } from 'react-icons/fa';
import { IconType } from 'react-icons';
import HomeView from 'views/HomeView';
import CalendarView from 'views/CalendarView';
import TasksView from 'views/TasksView';
import RewardsView from 'views/RewardsView';
import WellnessView from 'views/WellnessView';

export enum Route {
  HOME,
  CALENDAR,
  TASKS,
  REWARDS,
  WELLNESS,
}

export type TRouteInfo = {
  path: string;
  title: string;
  icon: IconType;
  component: () => ReactElement;
};

export const ROUTES: Record<Route, TRouteInfo> = {
  [Route.HOME]: {
    path: '/',
    title: 'Home',
    icon: FaHome,
    component: HomeView,
  },
  [Route.CALENDAR]: {
    path: '/schedule/',
    title: 'Calendar',
    icon: FaHome,
    component: CalendarView,
  },
  [Route.TASKS]: {
    path: '/tasks/',
    title: 'Tasks',
    icon: FaHome,
    component: TasksView,
  },
  [Route.REWARDS]: {
    path: '/rewards/',
    title: 'Rewards',
    icon: FaHome,
    component: RewardsView,
  },
  [Route.WELLNESS]: {
    path: '/wellness/',
    title: 'Wellness',
    icon: FaHome,
    component: WellnessView,
  },
} as const;
