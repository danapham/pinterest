import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    const boardObjects = response.data;
    const boards = [];
    if (boardObjects) {
      Object.keys(boardObjects).forEach((boardKey) => {
        boards.push(boardObjects[boardKey]);
      });
    }
    resolve(boards);
  }).catch((error) => reject(error));
});

const createBoard = (boardData) => axios.post(`${baseUrl}/boards.json`, boardData)
  .then((response) => {
    const fbKey = { boardId: response.data.name };
    axios.patch(`${baseUrl}/boards/${response.data.name}.json`, fbKey);
  }).catch((error) => console.warn(error));

export default { getAllBoards, createBoard };
