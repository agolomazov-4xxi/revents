import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Menu, Container, Button} from 'semantic-ui-react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import SignedOutMenu from '../menus/signed-out-menu';
import SignedInMenu from '../menus/signed-in-menu';
import {openModal} from '../../modals/modal-actions';
import {logout} from '../../auth/auth-actions';

class Navbar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const {auth} = this.props;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" exact header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {auth.authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {auth.authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/create-event"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}

          {auth.authenticated ? (
            <SignedInMenu
              currentUser={auth.currentUser}
              signOut={this.handleSignOut}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  openModal: (type, props) => dispatch(openModal(type, props)),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
