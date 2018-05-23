import React from 'react';
import {Form, Label} from 'semantic-ui-react';

const TextArea = ({
  input,
  width,
  label,
  rows = 3,
  placeholder,
  meta: {touched, error},
  meta,
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      {label && <Label>{label}</Label>}
      <textarea {...input} placeholder={placeholder} rows={rows} />
      {touched &&
        error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default TextArea;
