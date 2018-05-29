import React from 'react';
import {connect} from 'react-redux';
import {Form, Segment, Button, Label} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/text-input';
import {login} from '../auth-actions';

const LoginForm = ({login, handleSubmit, error}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  login: creds => dispatch(login(creds)),
});

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'loginForm',
  })(LoginForm)
);
