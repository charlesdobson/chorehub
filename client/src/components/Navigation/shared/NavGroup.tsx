import { createElement, ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import styled, { css } from 'styled-components';

interface INavProps {
  widthPercentage: number;
}
const Nav = styled.nav<INavProps>`
  height: 100%;
  width: ${(props) => `${props.widthPercentage}%`};
`;
interface INavLinkProps {
  isActive: boolean;
}
const NavLink = styled.a<INavLinkProps>`
  display: block;
  text-decoration: none;
  cursor: pointer;
  background: white;
  color: var(--gray-5);
  border-top: 1px solid var(--gray-3);
  font-family: var(--font-family-secondary);
  font-size: 0.8em;
  height: 100%;

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

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const ListItem = styled.li``;

interface INavGroupProps {
  widthPercentage: number;
}
const NavGroup = ({ widthPercentage }: INavGroupProps): ReactElement => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleNavClick = (path: string) => history.push(path);

  return (
    <Nav widthPercentage={widthPercentage}>
      <List>
        {Object.entries(ROUTES).map(([, route]) => (
          <ListItem key={route.path}>
            <NavLink
              key={route.path}
              isActive={route.path == pathname}
              onClick={() => handleNavClick(route.path)}
            >
              {createElement(route.icon)}
              {route.title}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

export default NavGroup;
