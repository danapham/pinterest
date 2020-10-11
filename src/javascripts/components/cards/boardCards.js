import boardData from '../../helpers/data/boardData';

const boardBuilder = (boardObj) => {
  const domString = `<div class="card board-card" style="width: 18rem;">
  <div class="card-body" id="${boardObj.boardId}">
    <p class="card-text">${boardObj.title}</p>
  </div>
  <button type="button" class="btn btn-light delete-board" id="${boardObj.boardId}">Delete</button>
</div>`;

  $('.delete-board').on('click', (e) => {
    console.warn(e.currentTarget);
    boardData.deleteBoard(e.currentTarget.id);
  });
  return domString;
};

export default { boardBuilder };
