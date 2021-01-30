import React from 'react';
import styled from 'styled-components';
import { theme } from '../Theme';

const SkipLinkStyle = styled.a`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
    background-color: white;
    border: ${theme.border.width.default} blue solid;
    padding: 0.5rem;
  }
`;

const SkipLink = () => <SkipLinkStyle href="#main">Skip to main content</SkipLinkStyle>;

export default SkipLink;
