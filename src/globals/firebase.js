import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA0r7W-ZykXgIfm0roFjwaJ78_IiC6RqB4",
  authDomain: "popstore-c6aa2.firebaseapp.com",
  databaseURL: "https://popstore-c6aa2.firebaseio.com",
  projectId: "popstore-c6aa2",
  storageBucket: "popstore-c6aa2.appspot.com",
  messagingSenderId: "215924440778"
};

firebase.initializeApp(config);

export default firebase;
