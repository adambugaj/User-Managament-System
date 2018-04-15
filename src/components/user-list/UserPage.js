import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserList from './UserList';
import AcceptUserForm from './AcceptUserForm'
// Material-ui
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const UserPage = (props) => {
  return (
    <MuiThemeProvider>
      <div className="content-conatainer">
        <Card className="content-conatainer1">
          <Link to="add-user">
            <FlatButton backgroundColor="#66CDAA" hoverColor="#3CB371" label="Add new user" />
          </Link>
          <Link to="/">
            <FlatButton className="box-layout__button1" label="Dashboard" />
          </Link>
        </Card>
        {// Show the list of users
          props.user.length !== 0 && props.user.map((user) => {
            return <UserList key={Math.random()}{...user} />
        })}
      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(UserPage);
