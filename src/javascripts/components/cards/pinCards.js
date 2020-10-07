const pinBuilder = (pinObject) => {
  const domString = `<div class="card" style="width: 18rem;">
  <img src="${pinObject.imageURL}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${pinObject.caption}</p>
  </div>
</div>`;

  return domString;
};

export default { pinBuilder };
