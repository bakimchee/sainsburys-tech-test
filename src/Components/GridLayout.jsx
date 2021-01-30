import React from 'react';
import styled from 'styled-components';
import { theme } from '../Theme';

const GridWrapper = styled.div`
  display: block;
  padding: 0 ${theme.size.spacing.large};
  max-width: 960px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: ${theme.size.spacing.default};
  grid-row-gap: ${theme.size.spacing.default};
`;

const GridLayout = ({ children }) => (
  <GridWrapper id="main">
    <Grid>{children}</Grid>
  </GridWrapper>
);

export default GridLayout;
