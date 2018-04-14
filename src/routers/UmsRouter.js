import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '.././components/Header';
import { MainPage } from '.././components/MainPage';
import UserPage from '.././components/user-list/UserPage';
import AcceptUser from '.././components/user-list/AcceptUserForm';
import AddUserPage from '.././components/user-list/AddUserPage';
import EditUser from '.././components/user-list/EditUser';
import GroupPage from '.././components/user-group/GroupPage';
import ListUserGroup from '.././components/user-group/ListUserGroup';

const UmsRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/user-list" component={UserPage} />
          <Route path="/add-user" component={AcceptUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/user-group" component={GroupPage} />
          <Route path="/list" component={ListUserGroup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default UmsRouter;
