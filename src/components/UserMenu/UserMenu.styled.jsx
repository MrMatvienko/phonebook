import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: black;
  font-size: 20px;
  text-shadow: rgb(255, 204, 0) 1px 0px 10px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #000000;
  color: #000000;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  transition: color, background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #b9bcd3;
    color: #ce1f1f;
    border: 2px solid #ce1f1f;
  }
`;
