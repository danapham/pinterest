import pinData from '../../helpers/data/pinData';

const pinBuilder = (pinObject) => {
  const domString = `<div class="card" style="width: 18rem;">
  <img src="${pinObject.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${pinObject.caption}</p>
    <button type="button" class="btn btn-light edit-pin" id="${pinObject.pinId}">Edit</button>
    <button type="button" class="btn btn-light delete-pin" id="${pinObject.pinId}">Delete</button>
  </div>
</div>`;

  $('body').on('click', 'button.delete-pin', (e) => {
    pinData.deletePin(e.currentTarget.id);
  });

  return domString;
};

export default { pinBuilder };
