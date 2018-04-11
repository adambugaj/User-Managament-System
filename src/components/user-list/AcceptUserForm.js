import React from 'react';
import { connect } from 'react-redux';
import AddUser from './AddUserPage';
import { addUser } from '../../actions/userGenerator';

class AcceptUserForm extends React.Component {
  onSubmit = (userData) => {
    console.log(userData, this.props);
    // Be sure what you type as Parameter, don't use destructuring ({})
    this.props.addUser(userData);
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

// Can we do it in one component?!

const mapDispatchToProps = (dispatch) => {
  return {
  addUser: (userData) => {
      dispatch(addUser(userData));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(AcceptUserForm);
