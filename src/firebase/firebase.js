// * as = all methods available when typed firebase.
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCQ6B14IJFcyHILmwiRRQydaULVDwCqhKs",
  authDomain: "user-management-system-ums.firebaseapp.com",
  databaseURL: "https://user-management-system-ums.firebaseio.com",
  projectId: "user-management-system-ums",
  storageBucket: "user-management-system-ums.appspot.com",
  messagingSenderId: "1037475828046"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Adam Bugaj'
});
