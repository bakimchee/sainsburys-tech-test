import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import { theme as staticTheme } from '../Theme';

import { CheckoutContext } from '../Context/Checkout';
import Button from './Button';

const Card = styled.div`
  background-color: ${({ theme }) => theme.foreground};
  border-radius: ${staticTheme.border.radius.default};
  padding: ${staticTheme.size.spacing.large};
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  @media (min-width: ${staticTheme.breakpoints.medium.min}) {
    margin-bottom: 0;
  }
  .card--body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: ${staticTheme.size.spacing.default};
    &__title {
      font-weight: bold;
      display: block;
      margin-bottom: ${staticTheme.size.spacing.small};
      flex-grow: 1;
    }
    &__price {
      display: block;
      font-weight: bold;
      font-size: large;
    }
    &__sku {
      font-size: small;
    }
    &__details {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }
  .card--image {
    display: flex;
    justify-content: center;
    margin-bottom: ${staticTheme.size.spacing.large};
  }
`;

const ProductCard = ({ product }) => {
  const [, dispatch] = useContext(CheckoutContext);
  const [, setBasket] = useState();

  const handleAddCheckout = () => {
    setBasket(product);

    dispatch({
      type: 'CREATE_ITEM',
      payload: {
        product,
        id: uuidv4(),
      },
    });
  };
  return (
    <Card id={product.productId}>
      <div className="card--image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card--body">
        <span className="card--body__title">{product.title}</span>
        <div className="card--body__details">
          <span className="card--body__price">{`£${product.price}`}</span>
          <span className="card--body__sku">{`sku: ${product.sku}`}</span>
        </div>
      </div>
      <div className="card--footer">
        <Button type="button" fullWidth onClick={handleAddCheckout}>
          Add to checkout
        </Button>
      </div>
    </Card>
  );
};

ProductCard.defaultProps = {
  product: undefined,
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    sku: PropTypes.string,
  }),
};

export default ProductCard;
