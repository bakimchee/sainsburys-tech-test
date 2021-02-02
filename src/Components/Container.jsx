import styled from 'styled-components';
import { theme } from '../Theme';

const Container = styled.div`
  display: block;
  padding: 0 ${theme.size.spacing.large};
  max-width: ${theme.breakpoints.xlarge.min};
  margin: 0 auto;
`;

export default Container;
