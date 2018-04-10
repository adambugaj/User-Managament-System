import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


export const UserPage = () => {
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
        <Card className="content-conatainer_component">
          <CardHeader
            title="Users section"
          />
          <CardActions >
            <FlatButton className="box-layout__button " backgroundColor="#F5F5F5" type="button" label="Edit" />
            <FlatButton className="box-layout__button box-layout__button1" backgroundColor="#F5F5F5" type="button" label="Remove" secondary={true}/>
          </CardActions>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};
