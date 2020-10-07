import boards from '../components/views/boards';
import boardPins from '../components/views/boardPins';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'boardsLink':
      return boards.boardView();
    case '123':
      return boardPins.boardPinsView(id);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListeners = () => {
  // viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', 'div.board-card', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListeners };
