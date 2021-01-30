import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/feather';

import { IconButton } from './Button';

import { theme } from '../Theme';
import { SidebarContext } from '../Context/Sidebar';
import { CheckoutContext } from '../Context/Checkout';

import { default as SainsburysLogo } from '../Assets/sainsburys.svg';

import Tag from './Tag';

import Checkout from './Checkout';

import ThemeSwitcher from './ThemeSwitcher';

const HeaderContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  padding: 0 ${theme.size.spacing.large};
  margin: 1rem 0;
  .header--logo {
    margin: 1rem;
    grid-area: 1 / 1 / 2 / 2;
  }
  .header--actions {
    grid-area: 1 / 2 / 3 / 5;
    justify-self: end;
    display: flex;
    justify-content: space-between;
  }
`;

const Header = () => {
  const [state] = useContext(CheckoutContext);
  const { handleSideBar } = useContext(SidebarContext);
  return (
    <>
      <HeaderContainer>
        <div className="header--logo">
          <img src={SainsburysLogo} alt="Sainsburys Logo" />
        </div>
        <div className="header--actions">
          <ThemeSwitcher />
          <IconButton onClick={handleSideBar} type="button">
            <ShoppingCart size="28" title="Shopping Cart" />
            <span>Your basket</span>
            {state.basket.length > 0 && <Tag>{state.basket.length}</Tag>}
          </IconButton>
        </div>
      </HeaderContainer>
      <Checkout />
    </>
  );
};

export default Header;
