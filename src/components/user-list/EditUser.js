import React from 'react';
import { connect } from 'react-redux';
import { removeUser, editUser } from '../../actions/userGenerator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AddUser from './AddUserPage';
import RemoveUser from './RemoveUser';

// User Data edition
const EditUser = (props) => {
  return (
    <div>
          <AddUser
            user={props.user}
            onSubmit={(user) => {
              props.dispatch(editUser(props.user.userID, user));
              props.history.push('/user-list');
            }}
          />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user.find((user) => {
      return user.userID === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(EditUser);
