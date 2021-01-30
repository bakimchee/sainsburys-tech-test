import React from 'react';
import styled from 'styled-components';
import { theme } from '../Theme';

const FooterStyle = styled.div`
  background-color: black;
`;

const Footer = ({ children }) => <FooterStyle>{children}</FooterStyle>;

export default Footer;
