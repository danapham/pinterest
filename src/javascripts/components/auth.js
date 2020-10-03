/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signMeOut = () => {
  firebase.auth().signOut();
};

// const setLoginStatus = (status) => {
//   sessionStorage.setItem('loginStatus', status);
// };

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // setLoginStatus(true);
      // display pins
      console.warn('logged in');
      // logoutButton();
    } else {
      console.warn('logged out');
      $('ul').remove('.user-view');
      // loginButton();
    }
  });
};

const logoutButton = () => {
  $('#authBtn').replaceWith(
    '<button class="btn btn-outline-secondary ml-auto" id="logoutBtn" type="button">Logout</button>'
  );
  $('#logoutBtn').on('click', () => {
    signMeOut();
    setLoginStatus(false);
  });
};

const loginButton = () => {
  if ($('#logoutBtn').length > 0) {
    $('#logoutBtn').replaceWith(
      '<button class="btn btn-outline-secondary ml-auto" id="authBtn" type="button">Login</button>'
    );
    $('#authBtn').on('click', signMeIn);
  } else {
    $('#authBtn').on('click', () => {
      signMeIn();
      setLoginStatus();
      $('#authBtn').replaceWith(
        '<button class="btn btn-outline-secondary ml-auto" id="logoutBtn" type="button">Logout</button>'
      );
    });
    logoutButton();
  }
  checkLoginStatus();
};

export default { loginButton };
