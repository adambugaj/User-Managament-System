
const userReducerDefault = [];

const userReducer = (state = userReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.userData
      ];
    case 'ADD_GROUP_TO_USER':
      console.log(state, action);
      return state.map((user) => {
        console.log(user.id === action.userData.id)
        if(user.id === action.userData.id) {
          console.log(action.groupName)
          return {
            ...user,
            userGroup: action.groupName
          };
        } else {
          return user;
        }
      });
    case 'REMOVE_USER':
      return state.filter((user) => {
        return user.id !== action.id;
      });
    case 'EDIT_USER':
    console.log(action, state)
      return state.map((user) => {
        if(user.ID === action.ID) {
          return {
            ...user,
            ...action.updates
          }
        } else {
          return user;
        }
      });
      case 'SET_USER':
        return action.userData;
    default:
      return state;
  }

};

export default userReducer;
