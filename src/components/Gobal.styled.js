import styled from 'styled-components';
import img from './assets/phonebooks.jpeg';
export const Container = styled('div')`
  text-align: center;
  margin: auto;
  /* background: linear-gradient(rgba(46, 47, 66, 0.1), rgba(48, 47, 80, 0.3)),
    url(${img}) 50% no-repeat #ffff; */
  box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.3);
  min-height: 100vh;
`;

export const TitleH1 = styled.h1`
  text-shadow: #fc0 1px 0 10px;
`;
export const TitleH2 = styled.h2`
  text-shadow: #fc0 1px 0 10px;
`;
export const TitleH3 = styled.h3`
  text-shadow: #fc0 1px 0 10px;
`;

export const Wrapper = styled.div`
  z-index: 1000;
`;
