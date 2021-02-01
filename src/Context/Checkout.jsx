import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

export const CheckoutContext = createContext();

const initState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return {
        basket: [...state.basket, action.payload],
      };
    case 'DELETE_ITEM':
      return {
        basket: state.basket.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

// Create a provider for components to consume and subscribe to changes
export const CheckoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <CheckoutContext.Provider value={[state, dispatch]}>{children}</CheckoutContext.Provider>;
};

CheckoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
