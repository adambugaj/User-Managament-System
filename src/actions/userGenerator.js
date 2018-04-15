import database from '../firebase/firebase';

const addUser = (userData) => {
  return {
    type: "ADD_USER",
    userData
  }
};

//ADD DATA TO FIREBASE
const saveAddUser = (userData = {}) => {
  // Function in return only works by support from middleware (redux thunk)
  // Function is run entirely by redux
  return (dispatch) => {
    // Better way to create constructor by distructuring
    const {
      userName = '',
      userPassword = '',
      userFirstName = '',
      userLastName = '',
      userDateBirth = '',
      userGroup = ''
    } = userData;
    const user = {
      userID: `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`,
      userName, userPassword, userFirstName, userLastName, userDateBirth, userGroup
    }
    // Very important to user return before every database, without it we don't get back data! (always with then)
    return database.ref('user').push(user).then((ref) => {
      return dispatch(addUser({
        id: ref.key,
        ...user
      }));
    });
  };
};


//SET_USER FROM FIREBASE
const setUser = (userData) => {
  return {
    type: 'SET_USER',
    userData
  }
}

//DOWNLOAD DATA FROM FIREBASE
const fetchSetUser = () => {
  return (dispatch) => {
    return database.ref('user').once('value').then((snapshot) => {
      const userData = [];
      snapshot.forEach((childSnapshot) => {
        userData.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
     return dispatch(setUser(userData));
    });
  };
};

//REMOVE_USER FROM FIREBASE
const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    id
  }
};

//REMOVE DATA FROM FIREBASE
const removeUserFirebase = (id) => {
  return (dispatch) => {
    return database.ref(`user/${id}`).remove().then(() => {
    dispatch(removeUser(id));
    })
  };
}

const editUser = (userID, updates) => {
  return {
    type: 'EDIT_USER',
    userID,
    updates
  };
};

const addGroupToUser = (groupName, userData) => {
  return {
    type: 'ADD_GROUP_TO_USER',
    groupName,
    userData
  }
}

export { saveAddUser, removeUser, editUser, fetchSetUser, removeUserFirebase, addGroupToUser };

/* // This generator is only used without database (at the beginning of programming app)
const addUser = ({
  userName = '',
  userPassword = '',
  userFirstName = '',
  userLastName = '',
  userDateBirth = ''
} = {}
) => ({
  type: "ADD_USER",
  user: {
    // ID only needed when we don't save data to database
    userID: `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`,
    userName,
    userPassword,
    userFirstName,
    userLastName,
    userDateBirth
  }
});
*/
