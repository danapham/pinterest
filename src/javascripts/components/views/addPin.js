import pinForm from '../forms/pinForm';

const addPin = () => {
  $('#app').html('<div id="pinForm" class="forms"></div>');
  pinForm.pinForm();
};

export default { addPin };
