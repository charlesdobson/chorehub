import { createElement, ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import styled from 'styled-components';

interface INavButtonProps {
  isActive: boolean;
}
const NavButton = styled.button<INavButtonProps>`
  all: unset;
  background: ${(props) => (props.isActive ? 'blue' : 'red')};
`;

const BottomNav = (): ReactElement => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleNavClick = (path: string) => history.push(path);

  return (
    <nav>
      {Object.entries(ROUTES).map(([, route]) => (
        <NavButton
          key={route.path}
          isActive={route.path == pathname}
          onClick={() => handleNavClick(route.path)}
        >
          {createElement(route.icon)}
          {route.title}
        </NavButton>
      ))}
    </nav>
  );
};

export default BottomNav;
