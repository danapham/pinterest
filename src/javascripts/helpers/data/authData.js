import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../../components/navbar';
import loginButton from '../../components/auth';
import homeView from '../../components/home';
import viewHelpers from '../viewHelpers';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navbar.displayUserNav();
      viewHelpers.viewListeners('boardsLink');
    } else {
      loginButton.loginButton();
      homeView.homeView();
    }
  });
};

export default { checkLoginStatus };
