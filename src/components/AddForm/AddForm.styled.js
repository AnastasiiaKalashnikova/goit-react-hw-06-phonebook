import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 16px 20px 20px 20px;
  border: 2px solid;
  margin-bottom: 40px;
`;

export const AddBtn = styled.button`
  background-color: azure;
  border-radius: 8px;
  width: 160px;
  margin-right: auto;
  margin-left: auto;

  &:hover,
  &:focus {
    background-color: cadetblue;
  }
`;
