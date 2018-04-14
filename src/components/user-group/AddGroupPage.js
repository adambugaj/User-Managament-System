import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


export class AddGroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: props.group ? props.group.groupName : '',
    }
  }

// Add Username to the object state
  onGroupName = (e) => {
    const name = e.target.value;
      this.setState(() => ({ groupName: name }));
  };


//   onChangeEuro = (e) => {
//     const euro = e.target.value;
//     this.setState(() => ({ transactionEuro: euro }));
//   };

// Send a data to an object after submitting
  onSubmit = (e) => {
      e.preventDefault();
      console.log(this.props)
      this.props.onSubmit({
        groupName: this.state.groupName
      });
    };

// Interfejs aplikacji oraz komponenty material-ui
  render() {
    return (
      <div className="content-conatainer">
        <form onSubmit={this.onSubmit}>
        <MuiThemeProvider>
          <Card >
            <CardHeader
              title="Add new group"
            />
            <TextField
              floatingLabelText="Group name"
              className="input-group"
              type="text"
              value={this.state.groupName}
              onChange={this.onGroupName}
              className="input-group__item"
            />
            <CardActions>
              <FlatButton type="submit" label="Submit" />
            <Link to="/">
              <FlatButton className="box-layout__button1" label="Dashboard" />
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
export default AddGroupPage;
