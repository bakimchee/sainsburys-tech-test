import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../Theme';

const Grid = styled.div`
  @media (min-width: ${theme.breakpoints.medium.min}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: ${theme.size.spacing.default};
    grid-row-gap: ${theme.size.spacing.default};
  }
`;

const GridWrapper = styled.div`
  display: block;
  padding: 0 ${theme.size.spacing.large};
  max-width: ${theme.breakpoints.large.max};
  margin: 0 auto;
`;

const GridLayout = ({ children }) => (
  <GridWrapper id="main">
    <Grid>{children}</Grid>
  </GridWrapper>
);

GridLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridLayout;
