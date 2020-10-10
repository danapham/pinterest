import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`).then((response) => {
    const pinObjects = response.data;
    const boardPins = [];
    if (pinObjects) {
      Object.keys(pinObjects).forEach((pinKey) => {
        boardPins.push(pinObjects[pinKey]);
      });
    }
    resolve(boardPins);
  }).catch((error) => reject(error));
});

const createPin = (pinData) => axios.post(`${baseUrl}/pins.json`, pinData)
  .then((response) => {
    console.warn(pinData);
    const fbKey = { pinId: response.data.name };
    axios.patch(`${baseUrl}/pins/${response.data.name}.json`, fbKey);
  }).catch((error) => console.warn(error));

// const editPin = (pinId) => {

// }

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default { getBoardPins, deletePin, createPin };
