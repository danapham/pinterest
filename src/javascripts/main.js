import '../styles/main.scss';
import firebase from 'firebase/app';
// import axios from 'axios';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
};

init();
