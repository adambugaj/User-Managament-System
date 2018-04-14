
const groupReducerDefault = [];

const groupReducer = (state = groupReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        action.group
      ];
    case 'ADD_USER_TO_GROUP':
      console.log(state, action);
      return state.map((group) => {
        console.log(group.groupName === action.group, group.groupName, action.groupName);
        if (group.groupName === action.groupName) {
          console.log("success", group);
          return {
              groupName: action.groupName,
              userList:[...group.userList, action.userData]
          }
        } else {
            return group;
          }
      });
    case 'REMOVE_GROUP':
      return state.filter((group) => {
        return group.groupName !== action.groupName;
      })
    default:
      return state;
  }

};

export default groupReducer;
