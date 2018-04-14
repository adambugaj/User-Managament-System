const addGroup = ({
  groupName = ''
} = {}
) => {
  console.log(groupName)
  return {
    type: "ADD_GROUP",
    group: {
        groupName,
        userList: []
    }
  };
}

const addUserToGroup = (groupName, userData) => {
  console.log(groupName);
  return {
    type: 'ADD_USER_TO_GROUP',
    groupName,
    userData
  }
}

const removeGroup = (groupName) => {
  return {
    type: 'REMOVE_GROUP',
    groupName
  }
}

export { addGroup, addUserToGroup, removeGroup };
