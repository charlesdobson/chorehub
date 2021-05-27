import { createElement, ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import styled, { css } from 'styled-components';

const Footer = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 7vh;
`;

const Nav = styled.nav`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

interface INavLinkProps {
  isActive: boolean;
}
const NavLink = styled.a<INavLinkProps>`
  text-decoration: none;
  cursor: pointer;
  background: white;
  color: var(--gray-5);
  border-top: 1px solid var(--gray-3);
  font-family: var(--font-family-secondary);
  font-size: 0.8em;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${({ isActive }) =>
    isActive &&
    css`
      margin-top: -1px;
      border-top: 2px solid var(--gray-10);
      color: var(--gray-10);
    `}
`;

const BottomNav = (): ReactElement => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleNavClick = (path: string) => history.push(path);

  return (
    <Footer>
      <Nav>
        {Object.entries(ROUTES).map(([, route]) => (
          <NavLink
            key={route.path}
            isActive={route.path == pathname}
            onClick={() => handleNavClick(route.path)}
          >
            {createElement(route.icon)}
            {route.title}
          </NavLink>
        ))}
      </Nav>
    </Footer>
  );
};

export default BottomNav;
