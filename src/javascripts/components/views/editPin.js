import editPinForm from '../forms/editPinForm';

const editPinView = (pinId) => {
  $('#app').html('<div id="editPinForm"></div>');
  editPinForm.editPinForm(pinId);
};

export default { editPinView };
