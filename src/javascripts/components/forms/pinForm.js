import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const pinForm = () => {
  boardData.getAllBoards().then((response) => {
    const boardTitles = [];
    $('#selectedBoardTitle').html('');
    $('#selectedBoardTitle').append('<option selected>Select a board</option>');
    response.forEach((board) => {
      $('#selectedBoardTitle').append(`<option value="${board.boardId}" id="">${board.title}</option>`);
      boardTitles.push(board.title);
    });
  }).catch((error) => console.warn(error));

  $('#pinForm').html(`
  <div id="pinSuccessMsg"></div>
  <form>
  <div id="pinErrorMsg"></div>
  <div class="form-group">
    <label for="imageUrl">Image Url</label>
    <input type="url" class="form-control" id="imageUrl">
  </div>
  <div class="form-group">
    <label for="caption">Caption</label>
    <input type="text" class="form-control" id="caption">
  </div>
  <select class="custom-select" id="selectedBoardTitle">
  </select>
  <button type="submit" id="submitPin" class="btn btn-primary">Submit</button>
</form>
`);

  $('#submitPin').on('click', (e) => {
    e.preventDefault();

    const pinFormData = {
      imageUrl: $('#imageUrl').val() || false,
      caption: $('#caption').val() || false,
      boardId: $('#selectedBoardTitle').val() || false
    };

    if (Object.values(pinFormData).includes(false)) {
      $('#pinErrorMsg').html('<div class="alert alert-danger" role="alert">Please fill out all fields.</div>');
    } else {
      $('#pinErrorMsg').html('');

      pinData.createPin(pinFormData)
        .then(() => {
          $('#pinSuccessMsg').html('<div class="alert alert-success" role="alert">Your pin was added!</div>');
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#pinSuccessMsg').html('');
      }, 3000);

      $('#imageUrl').val('');
      $('#caption').val('');
      $('#selectedBoardTitle').val('');
    }
  });
};

export default { pinForm };
