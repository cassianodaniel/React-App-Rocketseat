import axios from 'axios';

const API = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default API;
