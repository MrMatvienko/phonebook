import { styled } from 'styled-components';
import img from '../../components/assets/phonebooks.jpeg';
export const Title = styled.h1`
  margin: 0;
  padding-top: 200px;
  text-shadow: rgb(255, 204, 0) 1px 0px 10px;
  font-size: 54px;
`;

export const Wraper = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(46, 47, 66, 0.1), rgba(48, 47, 80, 0.3)),
    url(${img}) 50% no-repeat #ffff;
`;
