import boards from '../components/views/boards';
import boardPins from '../components/views/boardPins';
import addBoard from '../components/views/addBoard';
import addPin from '../components/views/addPin';
import editPin from '../components/views/editPin';

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
    case 'editPin':
      return editPin.editPinView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListeners = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', 'div.card', (e) => {
    viewHelper('displayPins', e.currentTarget.id);
  });
  $('body').on('click', 'button.edit-pin', (e) => {
    viewHelper('editPin', e.currentTarget.id);
  });
  $('#boardsLink').on('click', () => {
    window.location.reload();
  });
};

export default { viewListeners };
