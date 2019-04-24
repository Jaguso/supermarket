import axios from 'axios';

const API_URL = "some-api-route";

const addItem = (data) => axios.post(`${API_URL}/...`, data);

const getItems = () => axios.get(`${API_URL}/...`);

const deleteItem = (id) => axios.delete(`${API_URL}/${id}/...`);