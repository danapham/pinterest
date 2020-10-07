const boardBuilder = (boardObj) => {
  const domString = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${boardObj.name}</p>
  </div>
</div>`;
  return domString;
};

export default { boardBuilder };
