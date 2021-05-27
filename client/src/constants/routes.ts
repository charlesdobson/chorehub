import { ReactElement } from 'react';
import {
  FaHome,
  FaRegCalendar,
  FaRegHeart,
  FaTasks,
  FaTrophy,
} from 'react-icons/fa';
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
    icon: FaRegCalendar,
    component: CalendarView,
  },
  [Route.TASKS]: {
    path: '/tasks/',
    title: 'Tasks',
    icon: FaTasks,
    component: TasksView,
  },
  [Route.REWARDS]: {
    path: '/rewards/',
    title: 'Rewards',
    icon: FaTrophy,
    component: RewardsView,
  },
  [Route.WELLNESS]: {
    path: '/wellness/',
    title: 'Wellness',
    icon: FaRegHeart,
    component: WellnessView,
  },
} as const;
