
const userReducerDefault = [];

const userReducer = (state = userReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_USER':
    console.log(state, action)
      return [
        ...state,
        action.user
      ];
    case 'REMOVE_USER':
      return state.filter(({ userID }) => {
        return userID !== action.userID;
      });
    case 'EDIT_USER':
    console.log(action, state)
      return state.map((user) => {
        console.log(user, action.updates)
        if(user.userID === action.userID) {
          return {
            ...user,
            ...action.updates
          }
        } else {
          return user;
        }
      });
      case 'SET_USER':
        console.log(action)
        return action.userData;
    default:
      return state;
  }

};

export default userReducer;
