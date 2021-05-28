import styled from 'styled-components';
import BREAKPOINTS from 'constants/breakpoints';

const ViewWrapper = styled.div`
  position: relative;
  min-height: 86vh;
  @media ${BREAKPOINTS.DESKTOP} {
    min-height: 93vh;
  }
  width: 100%;
  margin-top: 7vh;
  background: var(--gray-2);
`;

export default ViewWrapper;
