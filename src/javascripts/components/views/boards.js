import boardCards from '../cards/boardCards';
import boardData from '../../helpers/data/boardData';

const boardView = () => {
  boardData.getAllBoards()
    .then((response) => {
      if (response.length) {
        response.forEach((boardObj) => {
          $('#app').append(boardCards.boardBuilder(boardObj));
        });
      } else {
        $('#app').html('<h2>No Boards</h2>');
      }
    });
};

export default { boardView };
