import boardForm from '../forms/boardForm';

const addBoard = () => {
  $('#app').html('<div id="boardForm"></div>');
  boardForm.boardForm();
};

export default { addBoard };
