import boardData from '../../helpers/data/boardData';

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
  <button type="submit" id="submitPin" class="btn btn-primary">Submit</button>
</form>
`);

  boardData.getAllBoards().then((response) => {
    // const boardTitles = [];
    $('#selectedBoardTitle').html('');
    $('#selectedBoardTitle').append('<option>Select a board</option>');
    response.forEach((board) => {
      $('#selectedBoardTitle').append(`<option value="${board.boardId}" ${board.boardId === singlePin.boardId ? 'selected' : ''}>${board.title}</option>`);
      // boardTitles.push(board.title);
    });
  }).catch((error) => console.warn(error));
};

export default { editPinForm };
