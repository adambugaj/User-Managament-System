import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class AddUser extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       transactionName: '',
//       transactionEuro: 0,
//       transactionSum: 0,
//       transactionHigh: 0
//     }
//   }
//
//   onChangeZloty = (e) => {
//     const zloty = e.target.value;
//     this.props.dispatch(editTransaction( zloty ));
//     this.setState(() => ({ transactionSum: zloty }));
//   };
//
//   onChangeName = (e) => {
//     const name = e.target.value;
//       this.setState(() => ({ transactionName: name }));
//   };
//
//   onChangeEuro = (e) => {
//     const euro = e.target.value;
//     this.setState(() => ({ transactionEuro: euro }));
//   };
//
// // Po zatwierdzeniu przyciskiem submit wysyłamy dane do obiektu
//   onSubmit = (e) => {
//       e.preventDefault();
//       console.log(this.props)
//       this.props.onSubmit({
//         transactionName: this.state.transactionName,
//         transactionEuro: this.state.transactionEuro,
//         transactionSum: this.state.transactionSum,
//         transactionHigh: (this.state.transactionSum * this.state.transactionEuro).toFixed(2)
//       });
//     };

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
              onChange={this.onChangeZloty}
              className="input-group__item"
          />
            <TextField
                floatingLabelText="Password"
                type="text"
                onChange={this.onChangeName}
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
            <TextField
                floatingLabelText="Choose a group"
                type="text"
                onChange={this.onChangeEuro}
                className="input-group__item"
            />
            <CardActions>
              <FlatButton type="submit" label="Submit" />
              <Link to="user-list">
                <FlatButton type="submit" label="Cancel" secondary={true}/>
              </Link>
            </CardActions>
          </Card>
        </MuiThemeProvider>
        </form>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     transaction: state.transaction
//   };
// };
//
