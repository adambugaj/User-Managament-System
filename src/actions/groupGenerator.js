// Adding a new group to the list
const addGroup = ({
  groupName = ''
} = {}
) => {
  return {
    type: "ADD_GROUP",
    group: {
        groupName,
        userList: []
    }
  };
}

//Adding the data of a user to a specified group and save it
const addUserToGroup = (groupName, userData) => {
  return {
    type: 'ADD_USER_TO_GROUP',
    groupName,
    userData
  }
}

// Removing a clicked group
const removeGroup = (groupName) => {
  return {
    type: 'REMOVE_GROUP',
    groupName
  }
}

export { addGroup, addUserToGroup, removeGroup };
