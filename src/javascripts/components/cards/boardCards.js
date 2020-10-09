const boardBuilder = (boardObj) => {
  const domString = `<div class="card board-card" style="width: 18rem;" id="${boardObj.boardId}">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${boardObj.title}</p>
  </div>
</div>`;
  return domString;
};

export default { boardBuilder };
