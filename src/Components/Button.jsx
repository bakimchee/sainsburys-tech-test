import styled from 'styled-components';
import { theme as staticTheme } from '../Theme';

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background: ${staticTheme.color.palette.orange};
  font-weight: bold;
  border: none;
  border-radius: ${staticTheme.border.radius.default};
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  min-height: ${staticTheme.size.default};
  min-width: ${staticTheme.size.default};
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus,
  :hover {
    background-color: ${staticTheme.color.palette.orangeDark};
    cursor: pointer;
  }
  // https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers
  &:not(button) {
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }
  ${(props) =>
    props.fullWidth &&
    `
    display: block;
    width: 100%;
  `}
  ${(props) =>
    props.outlined &&
    `
    background-color: transparent;
    border: solid ${staticTheme.border.width.large} ${staticTheme.color.palette.orange};
    color: ${staticTheme.color.palette.orange};
    &:focus,
    :hover {
      background-color: ${staticTheme.color.palette.orangeLight};
    }
  `}
  ${(props) =>
    props.small &&
    `
    padding: 0.25rem 0.5rem;
    font-size: small;
    `}
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  &:focus,
  :hover {
    background-color: ${staticTheme.color.palette.orangeLight};
  }
`;

export const IconButton = styled(Button)`
  & * + * {
    margin-left: 0.5rem;
  }
`;

export default Button;
