import { styled } from 'styled-components';
import img from '../../components/assets/phonebooks.jpeg';

export const LoginWraper = styled.div`
  height: 100vh;
  padding: 100px 200px;
  background: linear-gradient(rgba(46, 47, 66, 0.1), rgba(48, 47, 80, 0.3)),
    url(${img}) 50% no-repeat #ffff;
`;

export const Title = styled.h1`
  text-shadow: rgb(255, 204, 0) 1px 0px 10px;
`;
