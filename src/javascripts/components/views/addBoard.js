import boardForm from '../forms/boardForm';

const addBoard = () => {
  $('#app').html('<div id="boardForm" class="forms"></div>');
  boardForm.boardForm();
};

export default { addBoard };
