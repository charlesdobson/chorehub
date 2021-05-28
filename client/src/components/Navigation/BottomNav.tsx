import { ReactElement } from 'react';
import styled from 'styled-components';
import { NavGroup } from './shared';

const Footer = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 7vh;
`;

const BottomNav = (): ReactElement => (
  <Footer>
    <NavGroup widthPercentage={100} />
  </Footer>
);

export default BottomNav;
