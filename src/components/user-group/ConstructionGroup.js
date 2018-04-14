import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {removeGroup, addUserToGroup} from '../../actions/groupGenerator';

// Pokazuje listę zapisanych transakcji
const ConstructionGroup = (props) => {
  console.log(props);
  return (
    <div className="content-conatainer1">
      <MuiThemeProvider>
        <Card>
          <CardText>
            <div>
              <p>Group name: <strong>{props.groupName}</strong></p>
              {// Wyświetla listę użytkowników
                props.group.length !== 0 && props.userList.map((user) => {
                  return (
                    <p key={Math.random()}>Username: {user.userName} password: {user.userPassword}</p>
                  );
                })}
            </div>
          </CardText>
          <CardActions>
            <Link to={`/list`}>
              <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" label="Add User" />
            </Link>
            <Link to={`/edit/${props.userID}`}>
              <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" label="Edit" />
            </Link>
            <FlatButton className="box-layout__button " secondary={true} type="button" label="Remove" onClick={() => {
              props.dispatch(removeGroup(props.groupName))
            }}/>
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
export default connect(mapStateToProps)(ConstructionGroup);
