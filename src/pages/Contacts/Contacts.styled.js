import { styled } from 'styled-components';
import img from '../../components/assets/phonebooks.jpeg';
export const Wraper = styled.div`
  height: 100vh;
  padding-top: 100px;
  background: linear-gradient(rgba(46, 47, 66, 0.1), rgba(48, 47, 80, 0.3)),
    url(${img}) 50% no-repeat #ffff;
`;
