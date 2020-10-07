import boards from '../components/views/boards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'boardsLink':
      return boards.boardView();
    // case ''
    default:
      return console.warn('nothing clicked');
  }
};

const viewListeners = () => {
  // viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  // $('body').on('click', 'div.')
};

export default { viewListeners };
