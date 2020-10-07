import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo=${boardId}`).then((response) => {
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

export default { getBoardPins };
