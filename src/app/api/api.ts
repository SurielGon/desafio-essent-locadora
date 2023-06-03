// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const axiosConfig = axios.create({
// .. where we make our configurations
    baseURL: 'http://localhost:3000/api'
});

// Where you would set stuff like your 'Authorization' header, etc ...
axiosConfig.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axiosConfig;