import React, { useContext } from 'react';
import styled from 'styled-components';
import { X } from '@styled-icons/feather';

import { CheckoutContext } from '../Context/Checkout';
import { SidebarContext } from '../Context/Sidebar';

import { TransparentButton } from './Button';

const CheckoutContainer = styled.div`
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
  .basket-list--price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: large;
    font-weight: bold;
  }
  .basket-list--body {
    flex-grow: 1;
  }
  .basket-list--item {
    display: flex;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const Checkout = () => {
  const [state, dispatch] = useContext(CheckoutContext);
  const { handleSideBar, sideBar } = useContext(SidebarContext);

  const delCheckout = (id) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  };

  const handleCheckoutDelete = (id) => id && delCheckout(id);

  return (
    sideBar && (
      <CheckoutContainer>
        <BasketHeader>
          <h3>Your Basket</h3>
          <TransparentButton onClick={() => handleSideBar()}>
            <X size="28" title="Remove from basket" />
            Close sidebar
          </TransparentButton>
        </BasketHeader>

        {state.basket.length > 0 ? (
          <BasketList>
            {state.basket.map(({ id, product }) => (
              <div key={id} className="basket-list--item">
                <div className="basket-list--body">
                  {product.title}
                  <span className="basket-list--price">{`£${product.price}`}</span>
                </div>
                <TransparentButton small onClick={() => handleCheckoutDelete(id)}>
                  <X size="28" title="Remove from basket" />
                </TransparentButton>
              </div>
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
