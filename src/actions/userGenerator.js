const addUser = ({
  userName = '',
  userPassword = '',
  userFirstName = '',
  userLastName = '',
  userDateBirth = 0,
  userGroup = ''
} = {}
) => ({
  type: "ADD_USER",
  user: {
    userID: `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`,
    userName,
    userPassword,
    userFirstName,
    userLastName,
    userDateBirth,
    userGroup
  }
});

const removeUser = ({ userID } = {}) => ({
  type: 'REMOVE_USER',
  userID
});

const editUser = (userID, updates) => {
  return {
    type: 'EDIT_USER',
    userID,
    updates
  }
};

const filterTransaction = (transactionSum) => {
  return {
    type: 'FILTER_TRANSACTION',
    transactionSum
  }
};

export { addUser, removeUser, editUser };
