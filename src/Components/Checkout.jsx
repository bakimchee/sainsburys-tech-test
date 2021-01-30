import React, { useState, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { X } from '@styled-icons/feather';
import { theme as staticTheme } from '../Theme';

import { CheckoutContext } from '../Context/Checkout';
import { SidebarContext } from '../Context/Sidebar';

import Button, { IconButton } from './Button';

const CheckoutContainer = styled(animated.div)`
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.foreground};
  z-index: 1;
  padding: 1rem;
  box-shadow: -4px 0 14px 1px rgba(0, 0, 0, 0.12);
  width: 330px;
`;

const BasketList = styled.div`
  .basket-list--item {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: large;
    font-weight: bold;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const Checkout = () => {
  const [state, dispatch] = useContext(CheckoutContext);
  const { handleSideBar, sideBar } = useContext(SidebarContext);

  const flyOut = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const delCheckout = (id) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  };

  const handleCheckoutDelete = (id) => id && delCheckout(id);

  return (
    sideBar && (
      <CheckoutContainer style={{ flyOut }}>
        <BasketHeader>
          <h3>Your Basket</h3>
          <Button outlined onClick={() => handleSideBar()}>
            <X size="28" title="Remove from basket" />
            Close sidebar
          </Button>
        </BasketHeader>

        {state.basket.length > 0 ? (
          <BasketList>
            {state.basket.map(({ id, product }) => (
              <>
                {product.title}
                <div className="basket-list--item" key={id}>
                  {`£${product.price}`}
                  <IconButton outlined onClick={() => handleCheckoutDelete(id)}>
                    <X size="28" title="Remove from basket" />
                    Remove from basket
                  </IconButton>
                </div>
              </>
            ))}
          </BasketList>
        ) : (
          <div>Nothing in your basket</div>
        )}
      </CheckoutContainer>
    )
  );
};

export default Checkout;
