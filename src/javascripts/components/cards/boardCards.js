import boardData from '../../helpers/data/boardData';

const boardBuilder = (boardObj) => {
  const domString = `<div class="card board-card" style="width: 18rem;" id="${boardObj.boardId}">
  <div class="card-body">
    <p class="card-text">${boardObj.title}</p>
  </div>
  <button type="button" class="btn btn-light delete-board" id="${boardObj.boardId}">Delete</button>
</div>`;

  $('body').on('click', '.card.board-card .btn.delete-board', (e) => {
    boardData.deleteBoard(e.currentTarget.id);
    $(`.card#${e.currentTarget.id}`).remove();
  });

  return domString;
};

export default { boardBuilder };
