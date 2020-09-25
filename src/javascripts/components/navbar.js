import auth from './auth';

const displayNav = () => {
  $('#nav').html(`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Savorites</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Boards <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pins</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="btn btn-outline-secondary ml-auto" id="authBtn" type="button">Login</button>
        </li>
      </ul>
    </div>
  </nav>`);

  auth.loginButton();
};

export default { displayNav };
