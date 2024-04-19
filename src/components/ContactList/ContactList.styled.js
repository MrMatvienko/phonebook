import styled from 'styled-components';

// export const Title = styled.h2`
//   text-shadow: rgb(255, 204, 0) 1px 0px 10px;
//   font-size: 28px;
// `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Text = styled.p`
  font-size: 24px;
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
  border-radius: 10px;
  border: 1px solid #f08080;
  color: #f08080;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease,
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #b9bcd3;
    transform: scale(1.15);
  }
`;

export const StylePar = styled('p')`
  width: 240px;
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #f08080;
  color: #f08080;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: white;
`;

export const StyledUl = styled.ul`
  max-width: 600px;
  margin-top: 20px;
`;

export const AddText = styled.p`
  font-family: inherit;
  font-size: 24px;
`;
