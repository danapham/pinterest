import boards from '../components/views/boards';
import boardPins from '../components/views/boardPins';
import addBoard from '../components/views/addBoard';
import addPin from '../components/views/addPin';

const viewHelper = (id, arg) => {
  $('#app').html('');

  switch (id) {
    case 'boardsLink':
      return boards.boardView();
    case 'displayPins':
      return boardPins.boardPinsView(arg);
    case 'addBoardLink':
      return addBoard.addBoard();
    case 'addPinLink':
      return addPin.addPin();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListeners = () => {
  // viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
    console.warn(e.currentTarget.id);
  });
  $('body').on('click', 'div.board-card', (e) => {
    viewHelper('displayPins', e.currentTarget.id);
  });
};

export default { viewListeners };
