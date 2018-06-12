import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const theme = {
  smtBlue: '#3097d1',
};

export const NavBar = styled.nav`
  background-color: ${theme.smtBlue};
`;

export const NavBarLink = props => (
  <Link className="nav-link" {...props}>
    {props.children}
  </Link>
);