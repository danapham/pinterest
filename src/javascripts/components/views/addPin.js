import pinForm from '../forms/pinForm';

const addPin = () => {
  $('#app').html('<div id="pinForm"></div>');
  pinForm.pinForm();
};

export default { addPin };
