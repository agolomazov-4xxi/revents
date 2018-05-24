import React from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal} from './modal-actions';

const TestModal = ({data, title, closeModal}) => {
  return (
    <Modal closeIcon="close" open={true} onClose={closeModal}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>{data}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(TestModal);
