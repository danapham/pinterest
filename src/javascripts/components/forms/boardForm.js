import boardData from '../../helpers/data/boardData';

const boardForm = () => {
  $('#boardForm')
    .html(`<form>
            <h1 class="form-titles">Add a Board</h1>
            <div id="successMsg"></div>
            <div id="errorMsg"></div>
            <div class="form-group">
              <label for="boardTitle">Enter a board title</label>
              <input type="text" class="form-control" id="boardTitle" aria-describedby="boardTitleHelp">
            </div>
            <button type="submit" class="btn btn-light btn-primary" id="addBoardBtn">Submit</button>
          </form>`);

  $('#addBoardBtn').on('click', (e) => {
    e.preventDefault();

    const boardFormData = {
      title: $('#boardTitle').val() || false,
    };

    if (Object.values(boardFormData).includes(false)) {
      $('#errorMsg').html(
        '<div class="alert alert-danger" role="alert">Please enter a title.</div>'
      );
    } else {
      $('#errorMsg').html('');

      boardData
        .createBoard(boardFormData)
        .then(() => {
          $('#successMsg').html(
            '<div class="alert alert-success" role="alert">Your board was added!</div>'
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#successMsg').html('');
      }, 3000);

      $('#boardTitle').val('');
    }
  });
};

export default { boardForm };
