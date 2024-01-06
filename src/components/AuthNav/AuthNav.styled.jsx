import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #000000;
  font-size: 20px;
  text-shadow: rgb(255, 204, 0) 1px 0px 10px;

  &:hover {
    color: #ffffff;
  }
`;
