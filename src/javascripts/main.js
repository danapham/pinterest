import '../styles/main.scss';
import firebase from 'firebase/app';
import axios from 'axios';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    console.warn(response.data);
  }).catch((error) => reject(error));
});

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  getAllBoards();
};

init();
