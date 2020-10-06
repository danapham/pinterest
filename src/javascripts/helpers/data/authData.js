/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../../components/navbar';
import loginButton from '../../components/auth';
import homeView from '../../components/home';
import boardView from '../../components/boards';

// export default { checkLoginStatus };
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navbar.displayUserNav();
      boardView.boardView();
      console.warn('logged in');
    } else {
      loginButton.loginButton();
      console.warn('logged out');
      homeView.homeView();
    }
  });
};

export default { checkLoginStatus };
