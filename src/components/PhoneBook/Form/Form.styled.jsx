import styled from '@emotion/styled';
// import { Field, Form, ErrorMessage} from 'formik'

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 40px;
  width: 400px;
`;

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 30px;

  font-size: 20px;
  font-weight: bold;
`;
export const LabelPhone = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
