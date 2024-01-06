import styled from 'styled-components';

export const Title = styled.h2`
  text-shadow: rgb(255, 204, 0) 1px 0px 10px;
  font-size: 28px;
`;

export const Text = styled.p`
  text-shadow: rgb(255, 204, 0) 1px 0px 10px;
  font-size: 28px;
`;

export const Item = styled('li')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const BtnDelete = styled('button')`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #f08080;
  color: #f08080;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #b9bcd3;
  }
`;

export const StylePar = styled('p')`
  width: 240px;
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  border: 3px solid #f08080;
  color: #f08080;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: white;
`;

export const StyledUl = styled.ul`
  margin: auto;
  max-width: 600px;
  margin-top: 20px;
  padding-bottom: 40px;
`;
