import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

// Dashboard of the system
export const MainPage = () => {
  return (
    <MuiThemeProvider>
      <div className="content-conatainer1">
        <Card className="content-conatainer_component">
          <CardHeader
            title="User section"
          />
          <CardActions>
            <Link to="/user-list">
              <FlatButton type="submit" label="Manage User List" fullWidth={true} primary={true} backgroundColor="#F5F5F5"/>
            </Link>
          </CardActions>
        </Card>
        <Card className="content-conatainer_component">
          <CardHeader
            title="User groups section"
          />
          <CardActions>
            <Link to="/user-group/">
              <FlatButton type="button" label="Manage User Groups" fullWidth={true} primary={true} backgroundColor="#F5F5F5"/>
            </Link>
          </CardActions>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};
