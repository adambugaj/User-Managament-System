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
  return (
    <div className="content-conatainer">
      <AddGroupPage
        onSubmit={(group) => {
          props.dispatch(addGroup(group))
        }}
      />
      {// Shows the list of groups
        props.group.length !== 0 && props.group.map((group) => {
          return <ConstructionGroup key={Math.random()}{...group} />
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    group: state.group
  };
}
export default connect(mapStateToProps)(GroupPage);
