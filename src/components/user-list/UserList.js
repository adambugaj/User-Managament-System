import React from 'react';
import { connect } from 'react-redux';
import RemoveUser from './RemoveUser';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Pokazuje listę zapisanych transakcji
const UserList = (props) => {
  console.log(props);
  return (
    <div className="content-conatainer1">
      <MuiThemeProvider>
        <Card>
          <CardText>
            <div>
              <p>Username: <strong>{props.userName}</strong></p>
              <p>Password: <strong>{props.userPassword}</strong></p>
            </div>
          </CardText>
          <CardActions>
            <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" label="Edit" />
            <RemoveUser user={props} />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
//transaction = {props} - przenosi dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction

export default UserList;
