import editPinForm from '../forms/editPinForm';
import pinData from '../../helpers/data/pinData';

const editPinView = (pinId) => {
  $('#app').html('<div id="editPinForm"></div>');

  pinData.getSinglePin(pinId).then((response) => {
    editPinForm.editPinForm(response);
  }).catch((error) => console.warn(error));
};

export default { editPinView };
