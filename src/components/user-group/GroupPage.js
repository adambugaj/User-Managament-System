import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddGroupPage from './AddGroupPage';
import ConstructionGroup from './ConstructionGroup';
import { addGroup } from '../../actions/groupGenerator';
// Material-ui
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const GroupPage = (props) => {
  console.log(props);
  return (
    <div className="content-conatainer">
      <AddGroupPage
        onSubmit={(group) => {
          console.log(group)
          props.dispatch(addGroup(group))
        }}
      />
      {// Wyświetla listę grup
        props.group.length !== 0 && props.group.map((group) => {
          console.log(group)
          return <ConstructionGroup key={Math.random()}{...group} />
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    group: state.group
  };
}
export default connect(mapStateToProps)(GroupPage);
