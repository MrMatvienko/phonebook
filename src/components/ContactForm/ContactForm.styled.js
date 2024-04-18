import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 100px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f08080;
  border-radius: 4px;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  margin-bottom: 5px;
  border-radius: 10px;
  border-color: black;
  padding-left: 20px;
  height: 20px;
  color: #171718;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  &::placeholder {
    font-size: 12px;
    color: black;
  }
`;

export const StyledBtn = styled.button`
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
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #b9bcd3;
  }
`;
