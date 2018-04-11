import React from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../actions/userGenerator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const RemoveUser = (props) => {
  return (
    <div>
          <MuiThemeProvider>
          <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" secondary={true} label="Remove" onClick={ (trans) => {
            props.dispatch(removeUser({userID: props.user.userID}));
            }}
          />
        </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // Zwróc odpowiednie ID transakcji, która chcemy usunąc
  return {
    user: state.user.find((user) => {
      console.log(user, props);
      return user.userID === props.user.userID;
    })
  };
}
export default connect(mapStateToProps)(RemoveUser);
