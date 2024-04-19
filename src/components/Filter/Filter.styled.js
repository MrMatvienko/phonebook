import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 300px;
  margin-bottom: 5px;
  border-radius: 10px;
  padding-left: 20px;
  height: 20px;
  color: #171718;
  padding: 8px 12px;
  border: none;
  font: inherit;
  cursor: pointer;
  &::placeholder {
    font-size: 12px;
    color: black;
  }
`;
