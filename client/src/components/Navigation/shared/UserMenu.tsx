import { ReactElement } from 'react';
import styled from 'styled-components';
import { mixin } from 'styles';

const Wrapper = styled.div`
  height: 100%;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
`;

const DropdownButton = styled.button`
  all: unset;
  ${mixin.clickable};
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background: red;
`;

const UserMenu = (): ReactElement => {
  return (
    <Wrapper>
      <DropdownButton>UserMenu</DropdownButton>
    </Wrapper>
  );
};

export default UserMenu;
