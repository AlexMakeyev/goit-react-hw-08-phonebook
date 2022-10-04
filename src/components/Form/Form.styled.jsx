import styled from '@emotion/styled';
// import { Field, Form, ErrorMessage} from 'formik'

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelName = styled.label`
  margin-top: 0;
  margin-bottom: 30px;
  margin-left: 45px;
  font-size: 40px;
  font-weight: bold;
`;
export const LabelPhone = styled.label`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
`;
export const Input = styled.input`
  diplay: flex;
  flex-direction: column;
  font-size: 40px;
  margin-left: 20px;
  border: 1px solid green;
  border-radius: 4px;
  background-color: #9a9a9a;
  color: black;
  cursor: pointer;
`;
// export const Error = styled(ErrorMessage)`
// font-size:15px;
// font-weght: 400;
// color: red;
// `
export const AddButton = styled.button`
  margin-top: 0;
  margin-left: 160px;
  width: 200px;
  height: 40px;
  border: 1px solid green;
  border-radius: 4px;
  color: black;
  background-color: grey;
  font-weight: 500;
`;
