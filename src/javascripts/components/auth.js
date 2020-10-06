/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

// const setLoginStatus = (status) => {
//   sessionStorage.setItem('loginStatus', status);
// };

const loginButton = () => {
  $('#nav').html(`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Savorites</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="btn btn-outline-secondary ml-auto" id="loginBtn" type="button">Login</button>
        </li>
      </ul>
    </div>
  </nav>`);
  $('#loginBtn').on('click', signMeIn);
};

export default { loginButton };
