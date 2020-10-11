import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const editPinForm = (singlePin) => {
  $('#editPinForm').html(`
  <div id="pinSuccessMsg"></div>
  <form>
  <div id="pinErrorMsg"></div>
  <div class="form-group">
    <label for="imageUrl">Image Url</label>
    <input type="url" class="form-control" id="imageUrl" value="${singlePin.imageUrl}">
  </div>
  <div class="form-group">
    <label for="caption">Caption</label>
    <input type="text" class="form-control" id="caption" value="${singlePin.caption}">
  </div>
  <select class="custom-select" id="selectedBoardTitle">
  </select>
  <button type="submit" id="submitEditPin" class="btn btn-primary">Submit</button>
</form>
`);

  boardData.getAllBoards().then((response) => {
    $('#selectedBoardTitle').html('');
    $('#selectedBoardTitle').append('<option value="">Select a board</option>');
    response.forEach((board) => {
      $('#selectedBoardTitle').append(`<option value="${board.boardId}" ${board.boardId === singlePin.boardId ? 'selected' : ''}>${board.title}</option>`);
    });
  }).catch((error) => console.warn(error));

  $('#submitEditPin').on('click', (e) => {
    e.preventDefault();

    const pinFormData = {
      imageUrl: $('#imageUrl').val() || false,
      caption: $('#caption').val() || false,
      boardId: $('#selectedBoardTitle').val() || false
    };

    console.warn(pinFormData);

    if (Object.values(pinFormData).includes(false)) {
      $('#pinErrorMsg').html('<div class="alert alert-danger" role="alert">Please fill out all fields.</div>');
    } else {
      $('#pinErrorMsg').html('');

      pinData.editPin(singlePin.pinId, pinFormData)
        .then(() => {
          $('#pinSuccessMsg').html('<div class="alert alert-success" role="alert">Your pin was added!</div>');
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#pinSuccessMsg').html('');
      }, 2000);
    }
  });
};

export default { editPinForm };
