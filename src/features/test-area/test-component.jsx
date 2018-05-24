import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {openModal} from '../modals/modal-actions';
import {connect} from 'react-redux';

class TestComponent extends Component {
  render() {
    const {openModal} = this.props;
    return (
      <div style={{marginTop: 100}}>
        <div style={{height: '100vh', width: '100%'}}>
          <Button
            onClick={() =>
              openModal('TestModal', {data: 43, title: 'Test modal title'})
            }
            color="teal"
            content="Open Modal"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openModal: (type, props) => dispatch(openModal(type, props)),
});

export default connect(null, mapDispatchToProps)(TestComponent);
