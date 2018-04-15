import React from 'react';
import { connect } from 'react-redux';
import { removeUserFirebase } from '../../actions/userGenerator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const RemoveUser = (props) => {
  console.log(props)
  return (
    <div>
          <MuiThemeProvider>
          <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" secondary={true} label="Remove" 
          />
        </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // Zwróc odpowiednie ID transakcji, która chcemy usunąc
  console.log(state, props);
  return {
    // user: state.user.find((user) => {
    //   console.log(user, props);
    //   return user.id === props.user.userID;
    // })
    user: state
  };
}
export default connect(mapStateToProps)(RemoveUser);
