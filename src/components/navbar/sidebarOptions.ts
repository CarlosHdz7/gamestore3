import { routesPath } from '../routers/routes';

const sideBarOptions = [
  {
    id: 1,
    title: 'Home',
    path: routesPath.HOME,
    icon: 'bi bi-house-fill',
  },
  {
    id: 2,
    title: 'Games',
    path: routesPath.GAMES,
    icon: 'bi bi-joystick',
  },
  {
    id: 3,
    title: 'Login',
    path: routesPath.LOGIN,
    icon: 'bi bi-person-fill',
  },
];

export default sideBarOptions;
