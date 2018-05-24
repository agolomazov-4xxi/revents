import React from 'react';
import {connect} from 'react-redux';
import TestModal from './test-modal';
import LoginModal from './login-modal';
import RegisterModal from './register-modal';

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal,
};

const ModalManager = ({currentModal}) => {
  let renderModal = null;

  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderModal}</span>;
};

const mapStateToProps = state => ({
  currentModal: state.modals,
});

export default connect(mapStateToProps)(ModalManager);
