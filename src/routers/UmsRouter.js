import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '.././components/Header';
import { MainPage } from '.././components/MainPage';
import { UserPage } from '.././components/user-list/UserPage';
import { AddUser } from '.././components/user-list/AddUserPage';


const UmsRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/user-list" component={UserPage} />
          <Route path="/add-user" component={AddUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default UmsRouter;
