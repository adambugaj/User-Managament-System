import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RemoveUser from './RemoveUser';
import EditUser from './EditUser';
import {addUserToGroup} from '../../actions/groupGenerator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <p>Add to Group</p>
          <Link to={`/user-group/`}>
            <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" label="Add" onClick={
              () => {
                const groupName = prompt("Type the group name that you created");
                props.dispatch(addUserToGroup(groupName, props));
              }
            }/>
          </Link>
            <Link to={`/edit/${props.userID}`}>
              <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" label="Edit" />
            </Link>
            <RemoveUser user={props} />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
//transaction = {props} - przenosi dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    group: state.group
  };
}
export default connect(mapStateToProps)(UserList);
