import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/feather';

import { theme as staticTheme } from '../Theme';
import { SidebarContext } from '../Context/Sidebar';
import { CheckoutContext } from '../Context/Checkout';

import Logo from '../Assets/sainsburys.svg';

import Tag from './Tag';
import { IconButton } from './Button';

import ThemeSwitcher from './ThemeSwitcher';

const HeaderContainer = styled.div`
  padding: ${staticTheme.size.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${staticTheme.breakpoints.medium.min}) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    margin: 1rem 0;
    padding: 0 ${staticTheme.size.spacing.large};
  }
`;

const HeaderLogo = styled.div`
  min-width: 250px;
  flex: 1;
  padding: ${staticTheme.size.spacing.large};

  @media (min-width: ${staticTheme.breakpoints.medium.min}) {
    margin: 1rem;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${staticTheme.breakpoints.medium.min}) {
    grid-area: 1 / 2 / 3 / 5;
    justify-self: end;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const Header = () => {
  const [state] = useContext(CheckoutContext);
  const { handleSideBar } = useContext(SidebarContext);
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={Logo} alt="Sainsburys Logo" />
      </HeaderLogo>
      <HeaderActions>
        <ThemeSwitcher />
        <IconButton onClick={handleSideBar} type="button">
          <ShoppingCart size="28" title="Shopping Cart" />
          <span>Your basket</span>
          {state.basket.length > 0 && <Tag>{state.basket.length}</Tag>}
        </IconButton>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
