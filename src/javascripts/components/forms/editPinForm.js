import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const editPinForm = (pinId) => {
  boardData.getAllBoards().then((response) => {
    const boardTitles = [];
    $('#selectedBoardTitle').html('');
    $('#selectedBoardTitle').append('<option selected>Select a board</option>');
    response.forEach((board) => {
      $('#selectedBoardTitle').append(`<option value="${board.boardId}" id="">${board.title}</option>`);
      boardTitles.push(board.title);
    });
  }).catch((error) => console.warn(error));

  pinData.getSinglePin(pinId);

  $('#editPinForm').html(`
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
};

export default { editPinForm };
