import firebase from 'firebase/app';
import 'firebase/auth';

const logoutButton = () => {
  $('#logoutBtn').on('click', () => {
    firebase.auth().signOut();
  });
};

const displayUserNav = () => {
  $('#nav').html(`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Savorites</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav user-view">
        <li class="nav-item active" id="boardsLink">
          <a class="nav-link" href="#">Boards <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" id="addBoardLink">
        <a class="nav-link" href="#">+Add Board</a>
      </li>
      <li class="nav-item" id="addPinLink">
      <a class="nav-link" href="#">+Add Pin</a>
    </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="btn btn-outline-secondary ml-auto" id="logoutBtn" type="button">Logout</button>
        </li>
      </ul>
    </div>
  </nav>`);

  logoutButton();
};

export default { displayUserNav };
