import boards from '../components/boards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'boardsLink':
      return boards.boardView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListeners = () => {
  // viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListeners };
