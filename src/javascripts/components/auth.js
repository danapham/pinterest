import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // display pins
      // console.log('logged in');
      // logoutButton();
    } else {
      // console.log('logged out');
      $('ul').remove('.user-view');
      // loginButton();
    }
  });
};

const loginButton = () => {
  if ($('#logoutBtn').length > 0) {
    $('#logoutBtn').replaceWith('<button class="btn btn-outline-secondary ml-auto" id="authBtn" type="button">Login</button>');
    $('#authBtn').on('click', signMeIn);
  } else {
    $('#authBtn').on('click', signMeIn);
  }
  checkLoginStatus();
};

// const logoutButton = () => {
//   $('#authBtn').replaceWith('<button class="btn btn-outline-secondary ml-auto" id="logoutBtn" type="button">Logout</button>');
//   $('#logoutBtn').on('click', () => {
//     firebase.auth().signOut();
//     checkLoginStatus();
//   });
// };

export default { loginButton };
