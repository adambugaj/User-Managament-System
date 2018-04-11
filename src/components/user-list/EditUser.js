import React from 'react';
import { connect } from 'react-redux';
import { removeUser, editUser } from '../../actions/userGenerator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AddUser from './AddUserPage';

const EditUser = (props) => {
  console.log(props);
  return (
    <div>
          <p>Changing {props.user.userName} user</p>
          <AddUser
            user={props.user}
            onSubmit={(user) => {
              props.dispatch(editUser(props.user.userID, user))
              props.history.push('/user-list')
            }}
          />
    </div>
  )
}

const mapStateToProps = (state, props) => {
    console.log(state,props);
  return {
    user: state.user.find((user) => {
      console.log(user);
      return user.userID === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(EditUser);
