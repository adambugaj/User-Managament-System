import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import addUser from '../../actions/userGenerator';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.user ? props.user.userName : '',
      userPassword: props.user ? props.user.userPassword : '',
      userFirstName: props.user ? props.user.userFirstName : '',
      userLastName: props.user ? props.user.userLastName : '',
      userDateBirth: props.user ? props.user.userDateBirth : ''
    }
  }

// Add Username to the object state
  onUsername = (e) => {
    const value = e.target.value;
      this.setState(() => ({ userName: value }));
  };

  onUserPassword = (e) => {
    const value = e.target.value;
      this.setState(() => ({ userPassword: value }));
  };

  onUserFirstName = (e) => {
    const value = e.target.value;
      this.setState(() => ({ userFirstName: value }));
  };

  onUserLastName = (e) => {
    const value = e.target.value;
      this.setState(() => ({ userLastName: value }));
  };

  onUserDateBirth = (e) => {
    const value = e.target.value;
      this.setState(() => ({ userDateBirth: value }));
  };

//   onChangeEuro = (e) => {
//     const euro = e.target.value;
//     this.setState(() => ({ transactionEuro: euro }));
//   };

// Po zatwierdzeniu przyciskiem submit wysyłamy dane do obiektu
  onSubmit = (e) => {
      e.preventDefault();
      console.log(this.props)
      this.props.onSubmit({
        userName: this.state.userName,
        userPassword: this.state.userPassword,
        userFirstName: this.state.userFirstName,
        userLastName: this.state.userLastName,
        userDateBirth: this.state.userDateBirth
      });
    };

// Interfejs aplikacji oraz komponenty material-ui
  render() {
    return (
      <div className="content-conatainer">
        <form onSubmit={this.onSubmit}>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title="Provide data for a new user"
            />
            <TextField
              floatingLabelText="Username"
              className="input-group"
              type="text"
              value={this.state.userName}
              onChange={this.onUsername}
              className="input-group__item"
          />
            <TextField
                floatingLabelText="Password"
                type="text"
                value={this.state.userPassword}
                onChange={this.onUserPassword}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="First Name"
                type="text"
                value={this.state.userFirstName}
                onChange={this.onUserFirstName}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="LastName"
                type="text"
                value={this.state.userLastName}
                onChange={this.onUserLastName}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="Date of Birth - MM/DD/YEAR"
                type="text"
                value={this.state.userDateBirth}
                onChange={this.onUserDateBirth}
                className="input-group__item"
            />
            <CardActions>
              <FlatButton onSubmit={this.onSubmit} type="submit" label="Submit" />
              <Link to="user-list">
                <FlatButton type="button" label="Cancel" secondary={true} />
              </Link>
            </CardActions>
          </Card>
        </MuiThemeProvider>
        </form>
      </div>
    );
  }
};

// React components doesn't need to have connect
export default AddUser;
