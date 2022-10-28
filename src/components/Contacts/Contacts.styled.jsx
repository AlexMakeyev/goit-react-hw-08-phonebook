import styled from '@emotion/styled';
export const ContactList = styled.ul`
list-style: none;
margin top: 40px;
padding: 0;
display: flex;
flexwrap: wrap;
justify-content: center;
align-items: center;

`;
export const Item = styled.li`
  margin-right: 20px;
  & :last-child {
    margin-right: 0;
  }
  font-size: 40px;
  font-weight: bold;
  font-family: 'Helvetica Neue', sans serif;
`;
export const DeleteButton = styled.button`
  margin-left: 20px;
  width: 80px;
  height: 40px;
  border: 1px solid green;
  border-radius: 4px;
  color: black;
  background-color: grey;
  font-weight: 400;
`;
