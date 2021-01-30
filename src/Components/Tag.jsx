import styled from 'styled-components';
import { theme } from '../Theme';

const Tag = styled.span`
  background-color: ${theme.color.palette.blue};
  border-radius: ${theme.size.spacing.default};
  padding: 0.25rem 0.5rem;
`;

export default Tag;
