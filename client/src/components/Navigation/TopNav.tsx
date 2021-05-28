import { Fragment, ReactElement } from 'react';
import styled from 'styled-components';
import { useBreakpoints } from 'hooks';
import { NavGroup, UserMenu } from './shared';

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 7vh;

  display: flex;
  flex-flow: row nowrap;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const MobileLayout = (): ReactElement => (
  <Fragment>
    <UserMenu />
  </Fragment>
);

const DesktopLayout = (): ReactElement => (
  <Fragment>
    <Spacer />
    <NavGroup widthPercentage={30} />
    <UserMenu />
  </Fragment>
);

const TopNav = (): ReactElement => {
  const { isDesktop } = useBreakpoints();

  return <Header>{isDesktop ? <DesktopLayout /> : <MobileLayout />}</Header>;
};

export default TopNav;
