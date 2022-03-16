import axios from "axios";

//tomar el base URL
const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokeApi;

