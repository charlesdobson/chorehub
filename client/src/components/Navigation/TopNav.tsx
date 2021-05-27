import { ReactElement } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 7vh;
`;

const TopNav = (): ReactElement => {
  return <Header>TopNav</Header>;
};

export default TopNav;
