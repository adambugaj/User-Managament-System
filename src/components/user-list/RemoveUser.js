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
          <FlatButton className="box-layout__button" backgroundColor="#F5F5F5" type="button" secondary={true} label="Remove" onClick={() => {
            props.dispatch(removeUserFirebase(props.user.id))
          }}
          />
        </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // Return correct user data
  return {
    user: state.user.find((user) => {
      return user.id === props.user.id;
    })
  };
}
export default connect(mapStateToProps)(RemoveUser);
