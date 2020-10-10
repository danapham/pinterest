import editPinForm from '../forms/editPinForm';

const editPinView = () => {
  $('#app').html('<div id="editPinForm"></div>');
  editPinForm.editPinForm();
};

export default { editPinView };
