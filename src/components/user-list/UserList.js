import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RemoveUser from './RemoveUser';
import EditUser from './EditUser';
import { addUserToGroup } from '../../actions/groupGenerator';
import { addGroupToUser } from '../../actions/userGenerator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


// Pokazuje listę zapisanych transakcji
const UserList = (props) => {
  console.log(props);
  return (
    <div className="content-conatainer1">
      <MuiThemeProvider>
        <Card className="content-conatainer_component">
          <CardText >
            <div>
              <p>Username: <strong>{props.userName}</strong></p>
              <p>Password: <strong>Hidden</strong></p>
              <p>First Name: <strong>{props.userFirstName}</strong></p>
              <p>Last Name: <strong>{props.userLastName}</strong></p>
              <p>Date of Birth: <strong>{props.userDateBirth}</strong></p>
              <p>User Group: <strong>{props.userGroup}</strong></p>
            </div>
          </CardText>
          <CardActions>

          <Link to={`/user-group/`}>
            <p onClick={
              () => {
                const groupName = prompt("Type the group name that you created");
                props.dispatch(addUserToGroup(groupName, props));
                props.dispatch(addGroupToUser(groupName, props));
              }
            }>Add to Group
            </p>
          </Link>
            <Link to={`/edit/${props.userID}`}>
              <FlatButton className="box-layout__button1" backgroundColor="#F5F5F5" type="button" label="Edit" />
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
    group: state.group.map((group) => {
      console.log(group.userList);
      return group.userList
    }),
    user: state.user.map((user) => {
      return user
    })
  };
}
export default connect(mapStateToProps)(UserList);
