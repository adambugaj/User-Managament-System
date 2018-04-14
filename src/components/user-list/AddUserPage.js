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
      userPassword: '',
      userFirstName: '',
      userLastName: '',
      userDateBirth: 0,
      userGroup: ''
    }
  }

// Add Username to the object state
  onUsername = (e) => {
    const name = e.target.value;
      this.setState(() => ({ userName: name }));
  };

  onUserPassword = (e) => {
    const name = e.target.value;
      this.setState(() => ({ userPassword: name }));
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
                onChange={this.onUserPassword}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="First Name"
                type="text"
                onChange={this.onChangeEuro}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="LastName"
                type="text"
                onChange={this.onChangeEuro}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="Date of Birth - MM/DD/YEAR"
                type="text"
                onChange={this.onChangeEuro}
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
