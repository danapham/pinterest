import pinData from '../../helpers/data/pinData';

const pinBuilder = (pinObject) => {
  const domString = `<div class="card pin-card" id="${pinObject.pinId}" style="width: 18rem;">
  <img src="${pinObject.imageUrl}" class="card-img-top pin-img" alt="${pinObject.caption}">
  <div class="card-body pin-card-body">
    <p class="card-text">${pinObject.caption}</p>
    <button type="button" class="btn btn-light edit-pin" id="${pinObject.pinId}"><i class="fas fa-pen"></i></button>
    <button type="button" class="btn btn-light delete-pin" id="${pinObject.pinId}"><i class="far fa-trash-alt"></i></button>
  </div>
</div>`;

  $('body').on('click', 'button.delete-pin', (e) => {
    $(`.card#${e.currentTarget.id}`).remove();
    pinData.deletePin(e.currentTarget.id);
  });

  return domString;
};

export default { pinBuilder };
