
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
    case 'EDIT_TRANSACTION':
    console.log(action, state)
      return state.map((trans) => {
        console.log(trans, action.updates)
        return {
          ...trans,
          transactionSum: action.updates,
          transactionHigh: trans.transactionEuro * action.updates
        }
      });
    default:
      return state;
  }

};

export default userReducer;
