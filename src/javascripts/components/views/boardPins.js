import pinData from '../../helpers/data/pinData';
import pinBuilder from '../cards/pinCards';

const boardPinsView = (boardId) => {
  $('#app').html('');

  pinData.getBoardPins(boardId)
    .then((response) => {
      console.warn(response);
      if (response.length) {
        response.forEach((pin) => {
          $('#app').append(pinBuilder.pinBuilder(pin));
        });
      }
    });
};

export default { boardPinsView };
