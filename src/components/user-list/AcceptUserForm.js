import React from 'react';
import { connect } from 'react-redux';
import AddUser from './AddUserPage';
import { saveAddUser } from '../../actions/userGenerator';

class AcceptUserForm extends React.Component {
  onSubmit = (userData) => {
    // Be sure what you type as Parameter, don't use destructuring ({})
    this.props.saveAddUser(userData);
    this.props.history.push('/user-list');
  };
  render() {
    return (
      <div>
        <AddUser
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  saveAddUser: (userData) => {
      dispatch(saveAddUser(userData));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(AcceptUserForm);
